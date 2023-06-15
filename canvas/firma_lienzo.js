var marco = document.getElementById("marquito");
var lienzo = marco.getContext("2d");
/*
var x = 250;
var y = 250;

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
*/
// Funciones para pintar por mouse.
/*
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
    x = evento.offsetX;
    y = evento.offesetY;
    mousee = true;
    console.log("Dibujadno Con el evento mousedown", evento)
}

function dibujandoConMouseUP(evento) {
    if(mousee){
        dibujandoLienzo("blue", x, y, evento.offsetX, evento.offsetY);
        x = 0;
        y = 0;
        mousee = false;
    }
    console.log("Dibujadno Con el evento mouseup", evento)
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
// Evento tactil con el TouchMOVE

document.addEventListener("touchmove" , dibujandoConTouch);
document.addEventListener("touchend" , dibujandoConTouchEnd);
document.addEventListener("touchstar" , dibujandoConTouchStar);

function dibujandoConTouch(evento) {
    console.log("ESTOY DIBUJADNO CON MANO", evento);
}

function dibujandoConTouchEnd(evento) {
    console.log("ESTOY finalizando TouchEnd", evento);
}

function dibujandoConTouchStar(evento) {
    console.log("ESTOY DIBUJADNO TouchSTAR", evento);
}