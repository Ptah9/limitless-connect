const inputForm = document.querySelector(".input-form")
const sendButton = document.querySelector(".send-button")
const textInput = document.querySelector(".text-input")

inputForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const message = textInput.value
  textInput.value = ""

  console.log("Отправлено сообщение:", message)

  fetch("/api/hello")  // относительный путь, работает на vercel и локально
    .then(res => res.json())
    .then(data => {
      console.log("Ответ сервера:", data.message)
      // можно показать ответ где-нибудь на странице, если хочешь
    })
    .catch(err => console.error("Ошибка:", err))
})
