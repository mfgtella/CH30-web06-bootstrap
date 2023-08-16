console.log("Sesion JS 07 - Promise");
/* 
las promesas es un patron asincrono que se utiliza
para manejar operaciones asincronas.

las promesas permite realizar tareas asincronas y manejar los 
resultados (exito o error) en un momento posterior.

las promesas tiene 3 estados:
1. pending: el estado inicial de una promesa antes de que se resuelva o rechace
2. resolve: la promesa se resuelve con un valor 
3. rejected: la promesa se rechaza con una razon

resolve y reject son funciones de callback.
para crear una promesa se usa el constructor de la clase de Promise.

sintaxis:

    const pinkyPromise = new Promise (fncCallback);
    
*/

//const pinkyPromise = new Promise( () =>);
//const pinkyPromise = new Promise( (fncCallbackResolve, fncCallBackReject) =>{});
const pinkyPromise = new Promise( (fncCallbackResolve, fncCallBackReject) =>{
    const menorEdad = false;

    if(menorEdad)
        fncCallbackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject({code: 404, message: "Ni te topo"});
});

// consumir las promesas 
// se usa los metodos the, catch y finally*

console.log("*********PROMESAS*******************");
console.log("antes de consumir la promesa");

//pinkyPromise.then().catch().finally();
/*pinkyPromise
.then()// se ejecuta una fnc de Callback si la promesa fue resuleta
.catch() // se ejecuta una fnc de callback si la promesa fue rechazada 
.finally(); // se ejecuta una funcion de callback despues de que la 
            // promesa fue resuelta o rechazada
*/
pinkyPromise
.then( (response) => console.log(`Promesa resuelta: ${response}`) )
.catch( (error) => console.log(`Promesa rechazada: ${error.message}`) )
.finally( () => console.log("Se ha terminado de resolver la promesa") );


console.log("Despues de consumir la promesa");


// haciendo una promesa con parametros


const greeting = (name) =>{
    const myPromise = new Promise(  (resolve,reject) => {
    const firstChar = name.charAt(0).toLowerCase();    
        if(firstChar === `a`)
            setTimeout(() =>resolve({code: 200, message: `Soy ${name} hola a todos!` }),5000);
        else if ( firstChar === `l`)
            resolve({code: 201, message: `Soy ${name} saludos a toda la banda ch30` });
  
        else 
            reject({code:404 , message: `No estoy disponible para ${name}`});


    });

    return myPromise;

}
/*
greeting("Ana")
.then( response => console.log(response.code, response.message) )
.catch( error => console.log(error.code, error.message));

greeting("Luisa")
.then( response => console.log(response.code, response.message) )
.catch( error => console.log(error.code, error.message));

greeting("Eduardo")
.then( response => console.log(response.code, response.message) )
.catch( error => console.log(error.code, error.message));
*/

// ------------ consumir las promesas con async y await-------------

/*
async y await facilita la escritura y lectura del codigo asincrono.
permite escribir codigo asincrono de manera similar a como se 
escribiria codigo sincrono.

*/

async function greetingsCh30(name) {
    console.log("------Saludos a la banda de la Ch30------");
    const result = await greeting(name);
    console.log(result);
    console.log("----Fin del saludo-----");
};

//greetingsCh30("Anneth");

const greetingAll = async () =>{
  try{
    await greetingsCh30("Anneth");
    await greetingsCh30("Mau");
    await greetingsCh30("Leonardo");
  }

    catch (error) {
        console.warn("Se rechazo una promesa");
        console.table(error)
    }

}
greetingAll();