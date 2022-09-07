import { AlertError } from "./alert-error.js"
import { displayResultMessage,  notANumber, calculateIMC } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = event => {
  event.preventDefault()

  const weight = Number(inputWeight.value.replace(",", "."))
  const height = Number(inputHeight.value.replace(",", "."))

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    AlertError.openError()

    function endTimeToCloseAlertError() {
      AlertError.closeError()
    }
    
    return setTimeout(endTimeToCloseAlertError, 3000)
  }
  
  const resultIMC = calculateIMC(weight, height)
  displayResultMessage(resultIMC)
}

inputWeight.oninput = () => AlertError.closeError()
inputHeight.oninput = () => AlertError.closeError()