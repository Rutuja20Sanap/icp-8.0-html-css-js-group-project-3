function showLogin() {
    document.getElementById('Login-page').style.display = 'block';
    document.getElementById('Register-page').style.display = 'none';

   
}

function showRegister() {
    document.getElementById('Login-page').style.display = 'none';
    document.getElementById('Register-page').style.display = 'block';

   
}
function Login() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginText = document.getElementById('login-text');

    if(email.value == 0 || password.value == 0)
    {
         loginText.innerText = 'Please Filled all Input';
         loginText.style.color = 'red';
    }
    else{
        loginText.innerText = " Thank You 🙂 ";
        loginText.style.color = 'green';
    }
}
function Register() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginTexts = document.getElementById('login-text2');

    if(name.value == 0 || email.value == 0 || password.value == 0)
    {
        loginTexts.innerText = 'Please Filled all Input';
        loginTexts.style.color = 'red';
    }
    else{
        loginTexts.innerText = 'Thank You 🙂';
        loginTexts.style.color = 'green';
    }
}

