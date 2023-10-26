
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');

let formData = {};

formRef.addEventListener('submit', formSubmit);
textareaRef.addEventListener('input', throttle(textareaInput, 500));
formRef.addEventListener('input', throttle(savedForm, 500));


returnTextarea();

function savedForm(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formSubmit(event) {
  event.preventDefault();

if (inputRef.value.trim() === '' || textareaRef.value.trim() === '') {
    alert('All fields must be filled!');
    return;
  }

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function textareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
  // console.log(message);
}
function returnTextarea() {
  let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  for (const key in savedMessage) {
    if (key) {
      formRef[key].value = savedMessage[key];
      formData = savedMessage;
    }
  }
}