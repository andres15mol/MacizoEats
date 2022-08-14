//Controlador
//Pormientras
// document.getElementById('init-sec').classList.add('no-ver');
//     document.getElementById('home').classList.remove('no-ver');

var antes;
var opcAntes;

antes = 'home-menu';
opcAntes = '1';
function iniciarSecion(){
    document.getElementById('init-sec').classList.add('no-ver');
    document.getElementById('home').classList.remove('no-ver');
    document.getElementById('home-menu').classList.remove('no-ver');
    antes = 'home-menu';
    opcAntes = '1';
    
}

function cambiarVentana(nombre,numeroOpcion){
    
    agregarRemoverClase(antes, nombre);
    cambiarColorMenu(opcAntes, numeroOpcion);
    antes = nombre;
    opcAntes = numeroOpcion;
}

function agregarRemoverClase(antes,despues){
    document.getElementById(antes).classList.add('no-ver');
    document.getElementById(despues).classList.remove('no-ver');
}

function cambiarColorMenu(antes,despues){
    document.getElementById(despues).classList.add('select-opt');
    document.getElementById(antes).classList.remove('select-opt');
    
}