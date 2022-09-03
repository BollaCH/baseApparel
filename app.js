const btn = document.querySelector(".form__btn")
const form = document.querySelector(".form")
const mailInput = document.querySelector(".form__input")




function formError() {
    if (form.checkValidity() == false) {
        form.classList.add("error")
    } else {
        form.classList.remove("error")
    }
}

btn.addEventListener('click', () => {
    formError()
} )


///


document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
      document.querySelector(".form").focus();
    };
  })(), true);


form.addEventListener('submit', () => {
    btn.disabled = true;
    mailInput.disabled = true;
    mailInput.value = "Thank you for subscribing.";
  }  )