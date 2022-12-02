console.log('exo2');

let login = document.querySelector('#login').value;
let login1 = document.querySelector('#login');
let password = document.querySelector('#password').value;
let password1 = document.querySelector('#password');
let reponseLogin = document.querySelector('.reponseLogin');
let reponsePassword = document.querySelector('.reponsePassword');
let boutonSelector = document.querySelector('button');
let regexLogin = /(@)+(.)/


let regexMinCar = /^.{6,8}$/
let regexCarSpe = /[ &$!@]/
let regexChiffre = /[0-9]/



boutonSelector.addEventListener('click', function(){
    verifierLogin();
    verifierPassword();
})


function verifierLogin(){
    if(regexLogin.test(login)){
        reponseLogin.innerText =`Login OK`;
        login1.setAttribute('style', 'background-color: green;')
    } else {
        reponseLogin.innerText =`Le login doit conenir un @ et un .`
        login1.setAttribute('style', 'background-color: red;')
    }
}
function verifierPassword(){
    if( regexChiffre.test(password) && regexCarSpe.test(password) && regexMinCar.test(password)){
        reponsePassword.innerText = 'MDP OK';
        password1.setAttribute('style', 'background-color: green;');
    }else {
        reponsePassword.innerText = 'MDP PAS OK';
        password1.setAttribute('style', 'background-color: red;');
    }
}