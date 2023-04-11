const userName = document.querySelector('#name');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const mail = document.querySelector('#email-input');
const password = document.querySelector('#password-input');
const btn = document.querySelector('.btn-register');

btn.onclick = () => {
    let formResult = userName.value != '' && mail.value != '' && password.value != '';
    let dateResult = day.value != '' && month.value != '' && year.value != '';

    if(formResult && dateResult){
        this.location.href = "home.html";
    }
    else{
        alert("Um dos campos está incorreto!");
    }
}