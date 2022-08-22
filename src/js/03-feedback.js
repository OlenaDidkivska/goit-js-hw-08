import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

function onFormInput(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  const formData = {
    email,
    message,
  };

  console.log(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;

  if (email === '' || message === '') {
    alert('Будь ласка, заповніть всі поля!');
  }

  if (email !== '' && message !== '') {
    console.log(`Email: ${email}, Message: ${message}`);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
}

const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (formData) {
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
