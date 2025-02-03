const submitButton = document.querySelector(".submit-button")
const inputEmail = document.querySelector("#email")
const errorMessage = document.querySelector(".error-message")
const iconError = document.querySelector(".icon-error")

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email)
}

submitButton.addEventListener("click", (event)=>{
  event.preventDefault()

  if(!validateEmail(inputEmail.value)){
    iconError.classList.add("visible")
    errorMessage.classList.add("visible")
    inputEmail.style.borderColor = "red"
  }

})