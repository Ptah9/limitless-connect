const inputForm = document.querySelector(".input-form")
const sendButton = document.querySelector(".send-button")
const textInput = document.querySelector(".text-input")
const chat = document.querySelector(".chat")


console.log("script.js загружен и работает")


inputForm.addEventListener('submit', function(event) {
  console.log("submit сработал")  // вот этот лог должен появиться при отправке формы

  event.preventDefault()

  const message = textInput.value.trim()
  if (!message) return
  textInput.value = ""

  console.log("Отправлено сообщение:", message)

  fetch("/api/hello")
    .then(res => res.json())
    .then(data => {
      console.log("Ответ сервера:", data.message)
    })
    .catch(err => {
      console.log("Ошибка:", err)
    })
})
