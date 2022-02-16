function mayorNum(num1,num2) {
    let valid1 = true
    let valid2 = true
    if(typeof num1 != "number" || num1 === undefined)
    {
        valid1 = false
    }
    if(typeof num2 != "number" || num1 === undefined)
    {
        valid1 = false
    }
    if(valid1 && valid2)
    {
        if (num1 == num2) 
        {
            console.log("Los numeros son iguales")
        }
        else if (num1 > num2)
        {
            console.log("El num1 es mayor")
        } 
        else if (num1 < num2)
        {
            console.log("El num2 es mayor")
        }
    }
    else
    {
        console.log("Uno de los valores no es valido")
    }

}

 console.log(mayorNum(2, 1))
 console.log(mayorNum(2, 2))
 console.log(mayorNum(-1, 50))
 console.log(mayorNum(-20.5, 20.5))
 console.log(mayorNum(4))
 console.log(mayorNum())
 console.log("===========================================")


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
function generarNumeros() {
    let elementos;
    let opcionesGeneradas = "";
    for (let i = 0; i < 10; i++) {
        opcionesGeneradas += " " + getRandomInt(1, 100) + " ";
    }
    elementos = opcionesGeneradas;
    return elementos
}

console.log(generarNumeros())
console.log("===========================================")

function insertarNombre(nombre) {
    if (nombre == "" || nombre === undefined) 
    {
        console.log("El nombre no puede estar vacio");
    } 
    else
    {
        let opcion = "  " + nombre + " ";
        let lista = []
        lista.push(opcion);
        console.log("La lista es: " , lista)
        return("Se ha insertado el nombre");
    }
}


console.log(insertarNombre())
console.log(insertarNombre("Casa"))
console.log(insertarNombre("Luisa"))
console.log(insertarNombre('Jose'))
console.log("===========================================")