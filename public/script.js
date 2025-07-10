const inputForm = document.querySelector(".input-form")
const sendButton = document.querySelector(".send-button")
const textInput = document.querySelector(".text-input")
const chat = document.querySelector(".chat")


console.log("script.js загружен и работает")


inputForm.addEventListener('submit', function(event) {
  console.log("submit сработал")
  event.preventDefault()

  const message = textInput.value.trim()
  console.log("message:", message)
  if (!message) {
    console.log("пустое сообщение — выходим")
    return
  }
  textInput.value = ""

  fetch("/api/hello")
    .then(res => {
      console.log("response status:", res.status)
      return res.json()
    })
    .then(data => {
      console.log("Ответ сервера:", data.message)
    })
    .catch(err => {
      console.log("Ошибка:", err)
    })
})
