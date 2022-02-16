function hello(nombre){
    return("Hola "+nombre + "!!")
}

console.log(hello('Carlos'))

const helloFlecha = (nombre) => {
    return("Hola "+nombre + "!!") 
}

console.log(helloFlecha('Carlos'))

let suma = function(x,y){
    return x + y
};

let suma2a = (x, y) => { return x + y };
let suma3a = (x,y ) => x + y;

console.log(suma(4, 5))
console.log(suma2a(4, 5))
console.log(suma3a(4, 5))


// Tarea funcion flecha para cuadrados
let cuadrado = (x) => x*x;
console.log(cuadrado(4))


//Function imprimer caracteres de una palabra
var palabras = ["taco", "arbol", "perro", "cerveza"]

var contarletras = palabras.map(s => s.length)
console.log(contarletras)