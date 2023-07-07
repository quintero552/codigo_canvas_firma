var marco = document.getElementById("villa_campo");
var villa = marco.getContext("2d");

// creamos unos Objetos indicando false la imagenes hasta que no se realice la funcion
var fondo = {
    url : "tile.png",
    cargarOK : false
};

var vaca = {
    url : "vaca.png",
    cargarOK : false
};

var cerdo = {
    url : "cerdo.png",
    cargarOK : false
};

// Creamos unas variables tipo imagen. que se cargaran cuando se ejecute primero las funciones
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", dibujarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", dibujarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", dibujarCerdo);


// creamos unas funciones donde se dibujaran las imeganes si la funcion dibujar esta Ok
function dibujarFondo() {
    if (fondo.cargarOK = true) {
        dibujar();
    }
}

function dibujarVaca() {
    if (vaca.cargarOK = true) {
        dibujar();
    }
}

function dibujarCerdo() {
    if (cerdo.cargarOK = true) {
        dibujar();
    }
}



// Esta funcion es la principal que se ejecutara al hacer el 
function dibujar() {
    if(fondo.cargarOK == true){
        villa.drawImage(fondo.imagen, 0, 0); 
    }

    //Si euqeremos que las vacas salgan aleatorias colocamos una varibale
    var aleatorio = ciclo(5, 10)
    if (vaca.cargarOK) {
        // creamos una variable que realice la funcion de ciclo 
        //y que la imagen de la vaca sea 0 a 420 ya que 420 es 500 px el canvas - 80 px lo que es la imagen
        for(i = 0; i < aleatorio; i++){
            var x = ciclo(0, 5);
            var y = ciclo(0, 5);
            var x = x * 40;
            var y = y * 40;
            villa.drawImage(vaca.imagen, x, y);
        }        
    }
        

    
    if(cerdo.cargarOK){        

        villa.drawImage(cerdo.imagen, 150, 280);
    }   

       
    /*var aleatorio = ciclo(5, 10) // se ejecuta una vez cada vez que cargo la pagina que salgan vacas de 5 a 10  
    if (cerdo.cargarOK) {
        for(i=0; i < aleatorio; i++){ // podemos generar un ciclo for donde el interado si es menor a 10 se suma un cerdo.
            var x = ciclo(0, 5);
            var y = ciclo(0, 5);
            var x = x * 80; // esta variable multiplica la varibale x por 80 que vale cada imagen y asi no quede pegados las imagenes
            var y = y * 80; // esta variable multiplica la varibale x por 80 que vale cada imagen y asi no quede pegados las imagenes
            villa.drawImage(cerdo.imagen, x, y);
        }
        
    }*/
}






var x = 250;
var y = 250;

// dibujamos el lienzo
function dibujandoLienzo(cerdo, xi, yi, xf, yf){
    villa.beginPath();
    villa.strokeStyle = cerdo;
    villa.moveTo(xi, yi);
    villa.lineTo(xf, yf);
    villa.lineWidth=1;
    villa.stroke();
    villa.closePath();
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
        dibujandoLienzo(cerdo.imagen, x, y, x, y - 10, villa);
        y = y - 10;
        console.log("Este es el evento " + cerdo.imagen)
    }

    if (evento.keyCode == TECLAS.DOWN) {
        dibujandoLienzo(cerdo.imagen, x, y, x, y + 10, villa);
        y = y + 10;
    }
    
    if (evento.keyCode == TECLAS.RIGTH) {
        dibujandoLienzo(cerdo.imagen, x, y, x + 10, y, villa);
        x = x + 10;
    }

    if (evento.keyCode == TECLAS.LEFT) {
        dibujandoLienzo(cerdo.imagen, x, y, x - 10, y, villa);
        x = x - 10;
    }
}





























//var z = ciclo(10, 20); // creamos la variable que tendra los valores
//creamos la funcion que se ejecutara realizando el ciclo.
function ciclo(minimo, maximo) {
    var ejecucion;
    ejecucion = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return ejecucion;
    
}

//document.write("Este es un ciclo " + z); // imprimimos el resultado.






