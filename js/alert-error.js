export const AlertError = {
  element: document.querySelector(".alert-error"),

  openError() {
    AlertError.element.classList.add("open")
  },

  closeError() {
    AlertError.element.classList.remove("open")
  }
}