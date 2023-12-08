function validation() {
    let username = document.getElementById("username").value
    let email = document.getElementById("useremail").value
    let password = document.getElementById("userpassword").value


    
    let usercheck = /^[^\s][A-Za-z.]{3,30}$/;
    let passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let emailcheck = /^[A-Za-z_.0-9]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.0-9]{2,6}$/;

    if (usercheck.test(username)) {
        document.getElementById("usererror").innerText = ""

    }


    
    else{
        document.getElementById("usererror").innerText=" ** User Name is Required only Alphabet and Should me more than 3 characters"

    }
    if (emailcheck.test(email)) {
        document.getElementById("emailerror").innerText = ""
    } else {
        document.getElementById("emailerror").innerText = "** Uppercase (A-Z) and lowercase (a-z)  Digits (0-9)"


    }

    if (passwordcheck.test(password)) {
        document.getElementById("pwderror").innerText = ""
        window.location.href = "index.html";


    } else {
        document.getElementById("pwderror").innerText = "** Password is required minimum 3 characters one special symbol and one number"


    }
}

    function store() {
        let user = document.getElementById('username').value;
        let Email= document.getElementById("useremail").value;

        let Password = document.getElementById('userpassword').value;

     

        let Credential = JSON.parse(localStorage.getItem('users'));
        if(Credential) {
            Credential.push({name: user, email:Email,password: Password});
            localStorage.setItem('users', JSON.stringify(Credential));
            
    }else {
                localStorage.setItem('users', JSON.stringify([{name: user,email:Email, password:Password}]));
            }
}

    // function store() {
    //     var usrName = document.getElementById('username').value;
    //     var usrPw = document.getElementById('userpassword').value;
    
    //     let stored_users = JSON.parse(localStorage.getItem('users'));
    //     if(stored_users) {
    //         stored_users.push({name: usrName, password: usrPw});
    //         localStorage.setItem('users', JSON.stringify(stored_users));
    //     } else {
    //         localStorage.setItem('users', JSON.stringify([{name: usrName, password: usrPw}]));
    //     }
    // }