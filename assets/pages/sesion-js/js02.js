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


/* 
--------- funciones callback -------------
es una funcion(definida,expresada,arrow,anonima) que se pasa a otra funcion como argumento 
se pasa en el argumento como referencia (sin parentesis). 

 */
function saludoALosPokemon(){
    return "yo te elijo"
}

function saludoSquirtle(nombre){
    return "vamo` a calmanos"
}

function eligiendoPokebola(saludo,nombre){
     console.log("================================");
    console.log("hola estas en la liga pokemon");
    console.log("elige a tu mejor pokemon");
    console.log(saludo(nombre));

}
/* eligiendoPokebola(); */
/* eligiendoPokebola(saludoALosPokemon()); */
eligiendoPokebola(saludoALosPokemon);
eligiendoPokebola(saludoSquirtle);
eligiendoPokebola(function(){return "pika pika chuu"});
eligiendoPokebola(function(nombre){return "quiiii soy " + nombre},"cubone");
eligiendoPokebola((nombre) => `quiiiii soy ${nombre}`  , "cubone" );

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function cursosEnComun(student1Courses, student2Courses){
    const commonCourses = [];
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            console.log(`${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
            if (student1Courses[i] === student1Courses[j]){
                commonCourses.push(student1Courses[i]);
            }   
        }        
    }
    return `cursos en comun ${commonCourses}`
}
console.log(cursosEnComun(student1Courses,student2Courses));

//--------------- resolviendo con filter e include ---------------------

function getCommonCoursesWithFilter(array1Courses,array2Courses){
    return array1Courses.filter(course=> array2Courses.includes(course));
}
console.log(`comun: ${getCommonCoursesWithFilter(student1Courses,student2Courses)}`);

//---------- resolviendo con filter e include por partes-----------------
console.log("======================================")
function includeCourse(course,index){
    console.log(`Elemento ${course}, indice ${index}`);
    return student2Courses.includes(course);//evaluacion
}

function getCoursesWithFilter(array1Courses,array2Courses){
    const commonCourses = array1Courses.filter(includeCourse );
    return commonCourses;
}
console.log(`comunxpartes: ${getCoursesWithFilter(student1Courses,student2Courses)}`);


// -------------- Contar la cantidad de caracteres de una frase ---------------------
/*
   "peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma";

   Mostrar la cantidad de letras 'p'.

   recomendacion de metodos: split, filter.

*/
console.log("===================================================")
const cadena = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
console.log(`Cantidad de P: ${cadena.toLowerCase().split( "p").length-1}`);

// -------------- Recursividad ---------------------
/*
es una funcion que se llama a si misma, durante su ejecucion.
se utiliza en algoritmos y soluciones que se basan en la division y conquista
como calculos matematicos, recorrido de estructura de datos y algoritmos de busqueda
y ordenamiento.

patron:
    function nombreFuncionRecursiva(parametro){
        if (condicionParo){
            return expresion;
        }
        else{
            nombreFuncionRecursiva(nuevoParametro);
        }
    }
*/

//......... calculo del factorial de un numero usando ciclo for ........
console.log("===============================")
function factorialCicloFor(numero) {
    let factorial = 1;
    for (let i=1; i <=numero; i++){
        factorial = factorial * i;
    }
return factorial;
    
}
console.log(`El factorial de 5 es:${factorialCicloFor(5)}`)

//......... calculo del factorial de un numero usando recursividad ........
console.log("==================================================")
function factorialRecursivo(numero){
    if (numero === 1) {
       return 1; 
    } else {
       return numero * factorialRecursivo(numero -1); 
    }
}
console.log(`Factorial de numero con recursividad: ${factorialRecursivo(5)}`);

/*
Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo desado
*/
console.log("=====================================")
function saludo1 (numeroSaludo){
    if (numeroSaludo === 10) {
        return console.log("Saludo" + numeroSaludo + "");    
}
}
saludo1(10);

