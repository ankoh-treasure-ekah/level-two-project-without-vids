const username = document.querySelector('.register-field');
const password = document.querySelector('.password-filed-register');
const email = document.querySelector('.email-field')
const RegisterBtn = document.querySelector('.wrapper-btn-register');
const Userkey = "MyUsers";


RegisterBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if(username.value.length > 0){
        if(email.value.length > 0){
            if(password.value.length > 0){
                let myData = localStorage.getItem(Userkey);
                let parsedData = JSON.parse(myData);
                if(parsedData == null) {
                    parsedData = [];
                    parsedData.push({
                        username: username.value,
                        password: btoa(password.value),
                        email: email.value
                    });
                    localStorage.setItem(Userkey, JSON.stringify(parsedData));
                    alert('user successfully created.');
                    username.value = "";
                    password.value = "";
                    email.value = "";

                    return
                }

                for(i=0; i<parsedData.length;i++){
                    if(email.value == parsedData[i].email){
                        alert('email already exists');
                        return
                    }
                }
                
                parsedData.push({
                    username: username.value,
                    password: btoa(password.value),
                    email: email.value
                });
                localStorage.setItem(Userkey, JSON.stringify(parsedData));
                alert('user successfully created.');
                username.value = "";
                password.value = "";
                email.value = "";
    
                
                console.log(parsedData);
    
            }
            else {
                alert('password required')
            }

        }

        else {
            alert('email required');
        }

    }
    else {
        alert('username required')
    }
    
})