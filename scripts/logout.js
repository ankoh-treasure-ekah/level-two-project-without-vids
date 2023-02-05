const btnLogout = document.querySelector('.logout');

btnLogout.addEventListener('click', event => {
    event.preventDefault();

    setTimeout(() => {loadingScreen.classList.add('active');}, 50)


    setTimeout(() => {
        loginRegister.classList.remove('remove');
        userDropSvg.classList.remove('active');
        userImglogin.querySelector('svg').classList.remove('remove');
        userImglogin.style.background = 'grey';
        userImglogin.querySelector('span').textContent = "";
        accountContainer.classList.remove('active');
    }, 1000)

    setTimeout(() => {loadingScreen.classList.remove('active');}, 2500)

})