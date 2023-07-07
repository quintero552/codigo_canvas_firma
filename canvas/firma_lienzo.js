var marco = document.getElementById("marquito");
var lienzo = marco.getContext("2d");
/*****************************************************IBUJAR CON TECLAS*********************** */
// varibale donde comienza EL PUTO DE PARTIDA ES LA MITAD DEL CANVAS QUE ES 250
var x = 250;
var y = 250;

// dibujamos el lienzo
function dibujandoLienzo(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.lineWidth=1;
    lienzo.stroke();
    lienzo.closePath();
}


// dibujando con las teclas

document.addEventListener("keyup", dibujandoConTeclas);

var TECLAS = {
    UP : 38,
    RIGTH : 39,
    LEFT : 37,
    DOWN : 40
};

function dibujandoConTeclas(evento) {

    if (evento.keyCode == TECLAS.UP) {
        dibujandoLienzo("red", x, y, x, y - 10, lienzo);
        y = y - 10;
    }

    if (evento.keyCode == TECLAS.DOWN) {
        dibujandoLienzo("red", x, y, x, y + 10, lienzo);
        y = y + 10;
    }
    
    if (evento.keyCode == TECLAS.RIGTH) {
        dibujandoLienzo("red", x, y, x + 10, y, lienzo);
        x = x + 10;
    }

    if (evento.keyCode == TECLAS.LEFT) {
        dibujandoLienzo("red", x, y, x - 10, y, lienzo);
        x = x - 10;
    }
}


/*********************************************DIBUJAR CON MOUSE******************************************************* */
/*
// Funciones para pintar por mouse.
marco.addEventListener("mousedown", dibujandoConMouse);
marco.addEventListener("mouseup", dibujandoConMouseUP);
marco.addEventListener("mousemove", dibujandoConMouseMove);

var mousee = false;
var x = 0; // creamos la variable que esten en los punto 0
var y = 0;// creamos la variable que esten en los punto 0

function dibujandoLienzo(color, xi, yi, xf, yf){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.lineWidth=1;
    lienzo.stroke();
    lienzo.closePath();
}

function dibujandoConMouse(evento) {
    dibujandoLienzo("blue", x, y, x, y);
    x = evento.offsetX;
    y = evento.offsetY;
    mousee = true;
    console.log("Dibujadno Con el evento mousedown", evento)
}

function dibujandoConMouseUP(evento) {
    if(mousee){
        dibujandoLienzo("blue", x, y, evento.offsetX, evento.offsetY);
        x = 0;
        y = 0;
        mousee = false;
        console.log("Dibujadno Con el evento mouseup", evento)
    }
    
}

function dibujandoConMouseMove(evento) {

    if (mousee){
        dibujandoLienzo("blue", x, y, evento.offsetX, evento.offsetY);
        x = evento.offsetX;
        y = evento.offsetY;
        console.log("DIBUJANDO Con el evento mouseMove", evento)
    }           
    
}
*/

/*********************************************DIBUJAR CON TOUCH******************************************************* */

/*
// Evento tactil con el TouchMOVE

marco.addEventListener("touchstart" , dibujandoConTouchStart);
marco.addEventListener("touchmove", dibujandoConTouch);
marco.addEventListener("touchend" , dibujandoConTouchEnd);

// creamos las variables x e y para que comience en 0
x = 0;
y = 0;
var tic = false; // asinamos una variable tic que comenzara en false

function dibujandoLienzo(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.lineWidth=1;
    lienzo.stroke();
    lienzo.closePath();
}

// funcion del evento START//
function dibujandoConTouchStart(evento) {
    var touch = evento.touches[0]; // Obtén el primer toque (pueden haber más en multitouch)
    var rect = marco.getBoundingClientRect(); // Obtén el rectángulo del lienzo
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
    dibujandoLienzo("red", x, y, x, y, lienzo);
    tic = true;
    console.log("Start", evento);
}

// funcion del evento MOVIMIENTO//
function dibujandoConTouch(evento) { 
    if (tic) {
        var touch = evento.touches[0];        
        var rect = marco.getBoundingClientRect(); // Obtén el rectángulo del lienzo
        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        dibujandoLienzo("red", x, y, offsetX, offsetY, lienzo);
        x = offsetX;
        y = offsetY;
        tic = true;
        console.log("MOVE", evento) 
    }    
    
}

// funcion del evento FINAL//
function dibujandoConTouchEnd(evento) {
    tic = false;
    console.log("End", evento);
}*/