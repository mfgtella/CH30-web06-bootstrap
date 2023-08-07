console.log("sesion JS02- uso de funciones");

/*
funcion: conjunto de instrucciones que reliza uan tarea o calcula un valor.
codigo que se puede reutilizar.



........... Funciones declaradas................
(function declaration, function statement)
una caracteristica de las funciones declaradas es que tiene hoisting.

sintaxis:
    function nombreFuncion"camel case"(parametros){
    // cuerpo de la funcion
    .....instrucciones;
}

hoisting: comportamiento en JS que permite a las declaraciones de variables(var)
o funciones se eleven al comienzo de su ambito antes de que se ejecute el codigo.
*/
console.log(multiplica (4,3));
function multiplica(a,b){
    return a * b;
}

/*
---------- function expressions----------
son funciones declaradas dentro de la asignacion de una variable, estas 
funciones pueden ser anonimas (no tienen nombre).
las funciones expresadas no tienen hoisting, porque no se carga en memoria 
hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFunction(parametros){
        instrucciones;
    };
*/

const sum = function sumatoria(a,b){
    return a + b;
}

console.log(`el resultado de 4 + 2: ${sum(4,2)}`);

let saludo; // undefined
const localidad = "tlaxcala";
if (localidad == "buenos aires"){
    saludo = function (name) {return `Holis ${name}` };
}    
else {
    saludo = function (name){ return `buenos dias ${name}`};
}    
console.log(saludo("Fer"));

/*
--------- selft invoking functions------------
se autoinvocan y se pueden definir con funciones anonimas. 

sintaxis 
( function(parametros) {} )(argumentos);
*/
(function (name){
    console.log(`me llamo ${name} y me autoinvoco`);
})("chatGPt");

/*
--------- arrow functions------------
funciones similares a las funciones expresadas pero:
    no requiere la palabra reservada function
    si tiene una sola instruccion no requiere las llaves {}
    si la instruccion es el mismo retorno, no requiere palabra return

sintaxis 
    const nomreVariable = (parametros) => instruccion;
    const nomreVariable = (parametros) =>{
        instruccion;
        return expresion;
    }
*/

/* const areaRectangulo = function (base,altura){
    return base * altura;} */
const areaRectangulo = (base,altura) => base * altura;
    
console.log(`El area es: ${areaRectangulo(3,9)}m2.`);


/* 
--------- parametros por defecto -------------
inicializa un parametro de la funcion, si no se envia el argumento cuando se invoca
 */

/**
 * calcula el area de un rectangulo 
 * @param {number} base del triangulo
 * @param {number} altura 
 * @returns{number} base * altura/2
 */
const areaTriangulo = (base,altura) => base * altura/ 2.0;

console.log(`el area de un triangulo es: ${areaTriangulo(2,4)}m2.`)
console.log((1000).toString());
console.log((1000).toString(2));
console.log((1000).toString(16));

/* 
--------- rest parameters -------------
permite representar una serie de valores indefinidos en los argumentos
esta serie de valores se presentan como un array.
Rest parameters dede de estar al final de la lista de parametros

sintaxis:
    ...nombreParametros

 */
const sumatoriaMultiplesNumeros = (a,b,...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++){
        suma += rest[i]
    }
    return suma;
}    
console.log(`sumatoria multiples numeros: ${sumatoriaMultiplesNumeros(2,5)}`);
console.log(`multiples numeros: ${sumatoriaMultiplesNumeros(2,5,7,8)}`);
