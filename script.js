const login = document.getElementById('login');
const register = document.getElementById('register');
const btn = document.getElementById('btn');

function showRegister() {
  login.style.display = 'none';
  register.style.display = 'flex';
  btn.style.transform = 'translateX(100%)';
}

function showLogin() {
  register.style.display = 'none';
  login.style.display = 'flex';
  btn.style.transform = 'translateX(0)';
}
