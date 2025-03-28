const $form = document.querySelector("#form")
const $buttonMailto = document.querySelector("#trucazo")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute("href", `mailto:ondardev@gmail.com?subject=${form.get("nombre")} ${form.get("email")} - ${form.get("telefono")}&body=${form.get("mensaje")}`)
    $buttonMailto.click()
}