const form = document.querySelector('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
  if (password.value != confirm_password.value) {
    alert("As senhas não coincidem!");
    event.preventDefault();
  }
});