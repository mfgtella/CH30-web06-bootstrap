console.log("Sesion JS03 Control de flujo");
console.log("No olvidaremos el reto de Ed");
console.log("====================================");
// ------------- Declaracion bloque de codigo--------
/*
sintaxis:
        {

        }
las variables declaradas con let y const solo tendran alcance(scope)
dentro del bloque o bloques anidados.    

si la variable en el bloque, tiene el mismo nombre
que una variable fuera del bloque, se le da prioridad 
a la variable dentro del bloque.
*/
let firstname = "Fer";
const lastname = "Gomez"; 
var age ="30"

// let y const no se pueden redeclarar
{
    let firstname = "Mau";
    const lastname = "Peniche"; 
    var age ="26"
    const colorFavorito ="azul";
    var comidaFavorita = "pozole";

    console.log(`${firstname} ${lastname}`);
    console.log(age);
    console.log(colorFavorito);
    console.log(comidaFavorita);
}       
console.log(`${firstname} ${lastname}`);
console.log(age);
/* console.log(colorFavorito); */
console.log(comidaFavorita);

console.log("=================================")
//------------- Condicion if-else--------------
/*
ejecuta una sentencia si una condicion especifica es evaluada
como verdadera.

sintaxis:
    if (condicion) sentencia;
    
    if (condicion){
        sentecnias;
    }

    if (condicion) sentencia;
    else sentencia_si_condicion_es_falsa;

    if (condicion){
        sentencia;
    }
    else {
        sentencias;
    }
    */
const temperatura = 24;
let mensaje = "Temperatura ";

if(temperatura === 22 ){
    mensaje += `${temperatura} grados centigrados`;
}
else if ( temperatura >= 15 && temperatura<= 21) {
    mensaje += `${temperatura} grados centigrados es fría` ;
}   
else if ( temperatura >= 23 && temperatura<= 30) {
    mensaje += `${temperatura} es calurosa` ;
} 
else {
    mensaje += `${temperatura} grados centigrados no es ideal`;
}
console.log(mensaje);
console.log("====================================")

//-------------------- Condicional Switch------------
/*
la condicional switch evalua una expresion y se compara con el valor
de cada instancia en un "case" y se ejecuta las sentencias asociadas a ese
"case" hasta encontrar la sentencia "break" o se finalicen todas las sentencias
de la condicional switch.

sintaxis: 
    switch(expresion){
        case valor1:
            sentencias;
            break;
        case valor2:
            sentencias;
            break;
        case valor n:
            sentencias;
            break;
        default:
            sentencias;
            break;            
    }
*/

const setVelocidadVentilador = (velocidad = 0) =>{
    let mensaje;

    switch (parseInt(velocidad)){
        case 0:
            mensaje = "apagado"; break;
        case 1:
            mensaje = "velocidad baja"; break;
        case 2:
            mensaje = "velocidad media"; break;
        default:
            mensaje ="el nivel no existe"; break;   
    }
    return mensaje;
}
console.log(`el ventilador esta en ${setVelocidadVentilador(1)}`);
console.log(`el ventilador esta en ${setVelocidadVentilador(8)}`);
console.log(`valor: 2 ${setVelocidadVentilador(2)}`);
console.log(`valor: ? ${setVelocidadVentilador()}`);

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12, 1, 2 = invierno.
 mes 3, 4, 5  = primavera
 mes 6, 7, 8  = verano
 mes 9, 10, 1 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.
*/

/* function mostrarEstacion() {
    const numeroMes = prompt("Ingrese el número del mes (1-12):");
    const mes = Number(numeroMes);

    if (mes === 1 || mes === 2 || mes === 12) {
      alert("Estación: Invierno");
    } else if (mes >= 3 && mes <= 5) {
      alert("Estación: Primavera");
    } else if (mes >= 6 && mes <= 8) {
      alert("Estación: Verano");
    } else if (mes >= 9 && mes <= 11) {
      alert("Estación: Otoño");
    }
    
console.log("==========================================")
  switch (mes) {
    case 1:
    case 2:6
    case 12:
      mensaje:("El mes corresponde a la estación: Invierno");
      break;
    case 3:
    case 4:
    case 5:
      mensaje:("El mes corresponde a la estación: Primavera");
      break;
    case 6:
    case 7:
    case 8:
      menaje:("El mes corresponde a la estación: Verano");
      break;
    case 9:
    case 10:
    case 11:
      mensaje:("El mes corresponde a la estación: Otoño");
      break;
    default:
      mensaje:("Número de mes inválido. Debe estar entre 1 y 12.");
      break;
  }
}
mostrarEstacion(); */


//------------------- operador ternario-------------------------------
/*
es el unico operador de JavaScript que tiene 3 operandos.
generalmente se utlizia como opcion a la sentencia if-else

sintaxis:
    condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionFalsa;
*/

const pagoTarjetaCredito = true;

/* et msj;
if (pagoTarjetaCredito === true) msj= "a realizado el pago";
else msj = "no se ha realizado"; */
const msj = pagoTarjetaCredito ? "a realizado el pago" : "no ha realizado el pago"
console.log(`El usuario ${msj}`);


// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

/* const usuario = parseInt(prompt("escribe la edad" , 20)); */
const usuario = 20;
console.log(`El usuario${usuario >= 18 ? " es mayor de edad" : " no es mayor de edad"}`);

//......... Cálculo del factorial de un número usando recursividad ...............

/* function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`);
function factorialConRecursividad( numero ){

}
console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`); */
function factorialCinco(numero) {
    return numero === 0 ? 1 : numero * factorialCinco(numero - 1)};
console.log(`el factorial recursivo de 5 es: ${factorialCinco(5)}`);

