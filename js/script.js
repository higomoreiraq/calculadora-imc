
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  messageResultImc: document.querySelector(".modal-result-imc span"),
  messageResultRange: document.querySelector(".modal-result-range span"),
  buttonCloseWrapper: document.querySelector(".modal button.close"),

  buttonOpenInfos: document.querySelector("#button-infos"),
  infos: document.querySelector("#modal-infos"),
  buttonCloseInfos: document.querySelector("#close-infos"),

  openWrapper() {
    Modal.wrapper.classList.add("open")
  },

  closeWrapper() {
    Modal.wrapper.classList.remove("open")
  },

  openInfos() {
    Modal.infos.classList.add("open")
  },

  closeInfos() {
    Modal.infos.classList.remove("open")
  }
}


form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const resultImc = IMC(weight, height)

  let resultNumber = Number(resultImc.replace(",", "."))

  Modal.messageResultImc.innerText = resultImc
  calculateRange(resultNumber)
  Modal.openWrapper()
}

Modal.buttonCloseWrapper.onclick = () => {
  Modal.closeWrapper()
}

Modal.buttonOpenInfos.onclick = () => {
  Modal.openInfos()
}

Modal.buttonCloseInfos.onclick = () => {
  Modal.closeInfos()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2).replace(".", ",")
}

function calculateRange(resultNumber) {
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