const loginEmail = document.querySelector('.sign-in-field');
const loginPassword = document.querySelector('.password-filed-login');
const LogInBtn = document.querySelector('.sign-in-btn');
const welcomeMessage = document.querySelector('.message-displayer-login');
const loadingScreen = document.querySelector('.loading-screen');
const loginRegister = document.querySelector('.btn-login-register');
const userSvgLogin = document.querySelector('.svg-user');
const loginContainerSignin = document.querySelector('.login-container');
const accountContainer = document.querySelector('.site-account');
const userDropSvg = document.querySelector('.svg-user-drop');
const userImglogin = document.querySelector('.user-img');

const loginUserkey = "MyUsers";
const loginBool = 'userIn';

let EmailloginErrorHandler = loginEmail.nextElementSibling;
let passwordLoginErrorHandler = loginPassword.nextElementSibling.nextElementSibling;

// console.log(loginEmail.nextElementSibling);

function userCheck() {
    console.log('true')
    let myData = localStorage.getItem(loginBool);
    let parsedData = JSON.parse(myData);
    if(parsedData == null){
        return
    }
    loginRegister.classList.add('remove');
    userDropSvg.classList.add('active');
    userImglogin.querySelector('svg').classList.add('remove');
    userImglogin.style.background = 'white';
    userImglogin.querySelector('span').textContent = parsedData.username[0];
    accountContainer.classList.add('active');
}

userCheck();

LogInBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('true');
    if(loginEmail.value.length > 0){
        if(loginPassword.value.length > 0){
            let myData = localStorage.getItem(loginUserkey);
            let parsedData = JSON.parse(myData);
            if(parsedData == null){
                alert('user does not exist');
                loginEmail.value = "";
                loginPassword.value = "";
                return
            }
            
            for(i=0; i<parsedData.length;i++){
                if(loginEmail.value == parsedData[i].email){
                    //user found
                    if(loginPassword.value == atob(parsedData[i].password)){
                        welcomeMessage.classList.add('active');
                        setTimeout(() => {loadingScreen.classList.add('active');}, 1500)
                        setTimeout(() => {welcomeMessage.classList.remove('active');loginEmail.value = "";
                        loginPassword.value = "";}, 1000);
                        setTimeout(() => {
                            loginRegister.classList.add('remove');
                            userDropSvg.classList.add('active');
                            userImglogin.querySelector('svg').classList.add('remove');
                            userImglogin.style.background = 'white';
                            userImglogin.querySelector('span').textContent = parsedData[i].username[0];

                        }, 3000);
                        setTimeout(() => {
                            accountContainer.classList.add('active');
                        }, 1000);
                        setTimeout(() => {loginContainerSignin.classList.remove('active');}, 2000);
                        setTimeout(() => {loadingScreen.classList.remove('active');}, 4000)
                        // setTimeout(() => {location.reload();}, 9000);
                        localStorage.setItem(loginBool, JSON.stringify({
                            login: true,
                            username: parsedData[i].username
                        }));

                        return
                    }
                    alert('loginEmail or loginPassword incorrect');
                    return
                }
                
            }
            alert(`loginEmail ${loginEmail.value} not found`);
        }
        else {
            passwordLoginErrorHandler.innerHTML = "Password required!"
            passwordLoginErrorHandler.classList.add('active');
            setTimeout(() => {passwordLoginErrorHandler.classList.remove('active')}, 2000);

        }
    }
    else {
        EmailloginErrorHandler.innerHTML = "Email required!"
        EmailloginErrorHandler.classList.add('active');

        setTimeout(() => {EmailloginErrorHandler.classList.remove('active')}, 2000);
    }

})