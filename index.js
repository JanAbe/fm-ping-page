
const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');

form.addEventListener('submit', (event) => {
  const submittedEmail = event.target[0].value;
  if (!submittedEmail.includes('@')) {
    emailError.textContent = "Please provide a valid email address";
    emailError.classList.remove('sr-only');
    emailInput.classList.add('input-error');
  } else {
    emailError.textContent = "";
    emailError.classList.add('sr-only');
    emailInput.classList.remove('input-error');
  }
  event.preventDefault();
});