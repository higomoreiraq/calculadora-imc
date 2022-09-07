import { Modal } from "./modal.js"

export function displayResultMessage(resultIMC) {
  let resultNumber = Number(resultIMC.replace(",", "."))

  Modal.messageResultIMC.innerText = resultIMC
  calculateRange(resultNumber)
  Modal.openWrapper()
}

export function notANumber(value) {
  return isNaN(value) || value == "" || value == " "
}


export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2).replace(".", ",")
}

export function calculateRange(resultNumber) {
  if(resultNumber >= 16 && resultNumber < 17) {
    return Modal.messageResultRange.textContent = "Muito abaixo do peso"

  } else if(resultNumber >= 17 && resultNumber < 18.5) {
    return Modal.messageResultRange.textContent = "Abaixo do peso"

  } else if(resultNumber >= 18.5 && resultNumber < 25) {
    return Modal.messageResultRange.textContent = "Peso normal"

  } else if(resultNumber >= 25 && resultNumber < 30) {
    return Modal.messageResultRange.textContent = "Acima do peso"

  } else if(resultNumber >= 30 && resultNumber < 35) {
    return Modal.messageResultRange.textContent = "Obesidade grau 1"

  } else if(resultNumber >= 35 && resultNumber <= 40) {
    return Modal.messageResultRange.textContent = "Obesidade grau 2"

  } else if(resultNumber > 40) {
    return Modal.messageResultRange.textContent = "Obesidade grau 3"

  } else {
    return Modal.messageResultRange.textContent = "Valor não adotado pela OMS"
  }
}