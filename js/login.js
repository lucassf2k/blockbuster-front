const btn = document.querySelector('.btn-login');
const mail = document.querySelector('#email-input');
const password = document.querySelector('#password-input');

btn.onclick = () =>{
    let formResult = mail.value != '' && password.value != '';

    if(formResult){
        this.location.href = "home.html";
    }
    else{
        alert("Email ou senha inválidos");
    }
}