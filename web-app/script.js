const inputForm = document.querySelector(".input-form"),
      sendButton = document.querySelector(".send-button"),
      textInput = document.querySelector(".text-input");



inputForm.addEventListener('submit', function(event) {
    let message = textInput.value
    event.preventDefault();
    textInput.value = "";
    console.log(message)
});



fetch("http://localhost:3000/hello")
  .then(res => res.json())
  .then(data => {
    console.log(data.message)
  })
  .catch(err => console.error("Ошибка:", err))

