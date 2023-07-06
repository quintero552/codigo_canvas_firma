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
        console.log(fondo)
    }
}

function dibujarVaca() {
    if (vaca.cargarOK = true) {
        dibujar();
        console.log(vaca)
    }
}

function dibujarCerdo() {
    if (cerdo.cargarOK = true) {
        dibujar();
        console.log(cerdo)
    }
}


// Esta funcion es la principal que se ejecutara al hacer el 
function dibujar() {
    if(fondo.cargarOK == true){
        villa.drawImage(fondo.imagen, 0, 0); 
    }

    
    if (vaca.cargarOK) {
        // creamos una variable que realice la funcion de ciclo 
        //y que la imagen de la vaca sea 0 a 420 ya que 420 es 500 px el canvas - 80 px lo que es la imagen
        var x = ciclo(0, 420);
        var y = ciclo(0, 420);
        villa.drawImage(vaca.imagen, x, y);
    }
        
       
        
    if (cerdo.cargarOK) {
        for(i=0; i < 20; i++){ // podemos generar un ciclo for donde el interado si es menor a 10 se suma un cerdo.
            var x = ciclo(0, 420);
            var y = ciclo(0, 420);
            villa.drawImage(cerdo.imagen, x, y);
        }
        
    }
}

//var z = ciclo(10, 20); // creamos la variable que tendra los valores

//creamos la funcion que se ejecutara realizando el ciclo.
function ciclo(minimo, maximo) {
    var ejecucion;
    ejecucion = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    console.log(ejecucion)
    return ejecucion;
    
}

//document.write("Este es un ciclo " + z); // imprimimos el resultado.






