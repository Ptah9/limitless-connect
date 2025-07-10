const inputForm = document.querySelector(".input-form")
const sendButton = document.querySelector(".send-button")
const textInput = document.querySelector(".text-input")
const chat = document.querySelector(".chat")

inputForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const message = textInput.value.trim()
  if (!message) return // если пустое — не отправляем
  textInput.value = ""

  // Добавляем своё сообщение в чат
  const userMsg = document.createElement("div")
  userMsg.textContent = "Ты: " + message
  userMsg.style.fontWeight = "bold"
  chat.appendChild(userMsg)

  fetch("/api/hello")  // относительный путь, работает и на локале, и на Vercel
    .then(res => res.json())
    .then(data => {
      const botMsg = document.createElement("div")
      botMsg.textContent = "Сервер: " + data.message
      botMsg.style.color = "blue"
      chat.appendChild(botMsg)
      console.log(data.message)
    })
    .catch(err => {
      const errMsg = document.createElement("div")
      errMsg.textContent = "Ошибка: " + err.message
      errMsg.style.color = "red"
      chat.appendChild(errMsg)
      console.log(err.message)
    })
})
