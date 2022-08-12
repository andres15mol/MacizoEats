
const OPTION_LOGIN = 1;
const OPTION_REGISTER = 2;
const OPTION_USER_INVITED = 3;
const CONTENT_REGISTER_CLIENT = 4;
const CONTENT_REGISTER_DRIVER = 5;
/*const INTERFACE_CLIENT = 6;*/

let selectOption = option => {
    switch (option) {
        case OPTION_REGISTER:
            document.getElementById('content-register').style.display = "flex";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";
            break;
        case CONTENT_REGISTER_CLIENT:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "flex";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";           
            break;
        case CONTENT_REGISTER_DRIVER:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "flex"; 
            document.getElementById('interface-client').style.display = "none";
            break;
        case OPTION_LOGIN:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "flex";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            break;
        case OPTION_USER_INVITED:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "flex";

            break;
        default:
            break;

    }
}

let blockPag = option => {
    document.getElementById('content-register').style.display = "none";
    document.getElementById('content-login').style.display = "flex";
    document.getElementById('content-login-user').style.display = "none";
    document.getElementById('content-register-driver').style.display = "none";
    document.getElementById('content-register-client').style.display = "none";
    document.getElementById('interface-client').style.display = "none";
}






