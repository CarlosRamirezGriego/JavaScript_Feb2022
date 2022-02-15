function mayorNum(num1,num2) {


    var num2 = 6;
    
      if (num1 && num2) {
        if (num1 >= num2) {
          if (num1 == num2) {
            console.log("Los numeros son iguales")
          } else {
            console.log("El num1 es mayor")
          }
        } else {
          console.log("El num2 es mayor")
        }
      } else {
        console.log("Uno de los numeros no se relleno")
      }
    
    }
    
    console.log(mayorNum(6,9))



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
      
      
      }
      
      console.log(generarNumeros())


      function insertarNombre(nombre) {

        let nombre
      
        if (nombre == "") {
          console.log("El nombre no puede estar vacio");
        } else {
          let opcion = "  " + nombre + " ";
      
          let lista ;
      
          lista += opcion;
          console.log("La lista es: " , lista)
          return("Se ha insertado el nombre");
      
        }
      
      }
      
      console.log(insertarNombre())
      console.log(insertarNombre("Casa"))
      console.log(insertarNombre("Luisa"))
      console.log(insertarNombre('Jose'))