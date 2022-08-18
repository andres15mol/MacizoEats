
const CONTENT_LOGIN_USER = 1;
const CONTENT_REGISTER = 2;
const INTERFACE_CLIENT = 3;
const CONTENT_REGISTER_CLIENT = 4;
const CONTENT_REGISTER_DRIVER = 5;
const CONTENT_LOGIN = 6;
const INTERFACE_CLIENT_OPTION = 7;
const INTERFACE_CLIENT_RESTAURANTE = 8;


let selectOption = option => {
    switch (option) {
        case CONTENT_REGISTER:
            document.getElementById('content-register').style.display = "flex";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case CONTENT_REGISTER_CLIENT:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "flex";
            document.getElementById('content-register-driver').style.display = "none";
            document.getElementById('interface-client').style.display = "none";  
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";         
            break;
        case CONTENT_REGISTER_DRIVER:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "flex"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case CONTENT_LOGIN_USER:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "flex";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case INTERFACE_CLIENT:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "flex";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case CONTENT_LOGIN:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "flex";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case INTERFACE_CLIENT_OPTION:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "flex";
            document.getElementById('interface-client-restaurante').style.display = "none";
            break;
        case INTERFACE_CLIENT_RESTAURANTE:
            document.getElementById('content-register').style.display = "none";
            document.getElementById('content-login').style.display = "none";
            document.getElementById('content-login-user').style.display = "none";
            document.getElementById('content-register-client').style.display = "none";
            document.getElementById('content-register-driver').style.display = "none"; 
            document.getElementById('interface-client').style.display = "none";
            document.getElementById('interface-client-option').style.display = "none";
            document.getElementById('interface-client-restaurante').style.display = "flex";
            break;
        default:
            break;

    }
}

let blockPag = option => {
    document.getElementById('content-register').style.display = "none";
    document.getElementById('content-login').style.display = "none";
    document.getElementById('content-login-user').style.display ="none";
    document.getElementById('content-register-driver').style.display = "none";
    document.getElementById('content-register-client').style.display = "none";
    document.getElementById('interface-client').style.display = "none";
    document.getElementById('interface-client-option').style.display = "none";
    document.getElementById('interface-client-restaurante').style.display = "flex";
}






