export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  messageResultIMC: document.querySelector(".modal-result-imc span"),
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

Modal.buttonCloseWrapper.onclick = () => {
  Modal.closeWrapper()
}

Modal.buttonOpenInfos.onclick = () => {
  Modal.openInfos()
}

Modal.buttonCloseInfos.onclick = () => {
  Modal.closeInfos()
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if(event.key === "Escape") {
    Modal.closeWrapper()
    Modal.closeInfos()
  }
}