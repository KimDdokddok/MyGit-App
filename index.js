//index.html 을 위한 js file
function login(username,password) {
    if(!password){
        console.log("패스워드 값이 없다");
    }
    if(username){
            console.log("로그인 메시지" + username + " " + password);
    }
};

function logout() {
    console.log('logout');
}

function fixbugA() {
    console.log('fixbugA');
}

function fixbugB() {
    console.log('fixbugB');
}