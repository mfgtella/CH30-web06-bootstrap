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

