const inputForm = document.querySelector(".input-form")
const textInput = document.querySelector(".text-input")
const chat = document.querySelector(".chat")

inputForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const message = textInput.value.trim()
  if (!message) return
  textInput.value = ""

  // Показать сообщение пользователя
  const userMsg = document.createElement("div")
  userMsg.textContent = "Ты: " + message
  userMsg.style.fontWeight = "bold"
  chat.appendChild(userMsg)

  // Отправить запрос на сервер
  fetch("/api/hello")
    .then(res => res.json())
    .then(data => {
      // Показать ответ сервера в чате
      const serverMsg = document.createElement("div")
      serverMsg.textContent = "Сервер: " + data.message
      serverMsg.style.color = "blue"
      chat.appendChild(serverMsg)
    })
    .catch(err => {
      const errorMsg = document.createElement("div")
      errorMsg.textContent = "Ошибка: " + err.message
      errorMsg.style.color = "red"
      chat.appendChild(errorMsg)
    })
})
