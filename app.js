const btn = document.querySelector(".form__btn")
const form = document.querySelector(".form")

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
