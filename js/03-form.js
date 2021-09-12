const form = document.querySelector('.login-form');
const email = form.querySelector('input[type=email]');
const password = form.querySelector('input[type=password]');

const fnLoginForm = function (event) {
  event.preventDefault();
  const userInfo = {};
  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены.');
  }
  userInfo['email'] = email.value;
  userInfo['password'] = password.value;

  console.log(userInfo);
  form.reset();
};

form.addEventListener('submit', fnLoginForm);
