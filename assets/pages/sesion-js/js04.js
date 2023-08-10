console.log("Sesion JS04 matrices y bules");
console.log("Ni perdon, ni olvido,......reto para ED");

// declaramos un arreglo de 2 dimensiones (matriz)
// Arrays anidados
// [ [], [], [] ]

const personasEnCh30 = [ 
    [ "Luis", "Allan" , "Anneth"  , "Maryluz" ] ,  /* ByteMe */
    [ "Ed"  , "Jimena", "Marifer" , "Leo"    , "Alejandro" ] ,  /* PerryCode */
    [ "Lu"  , "Leo"   , "Daniel"  , "Gina"    ]    /* BugBusters */
];
console.log(`integrantes de BugBusters: ${personasEnCh30[2]}`);
console.log(`integrantes de BugBusters: ${personasEnCh30[2].join(", ")}`);
console.log(`BugBusters integrante n.2 :${personasEnCh30[2][0]}`);

personasEnCh30[1][3] = "Brayan";
console.table(personasEnCh30);


//-------------- iterando todos los elementos----------------

for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {
    for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ] );        
    }    
}

//--------- uso de for.... of------------------------
// ejecuta una sentencia por cada elemento de un objeto iterable(array,coleccio,string)
console.table(personasEnCh30);
console.log("======================================")

const myPet = "Kraken";
for (const letra of myPet) {
    console.log(letra);
}

myPet.split("").forEach(letra => { console.log(letra)})

console.log("======================================")

for (const equipo of personasEnCh30) {
    console.log(equipo);
    for (const persona of equipo) {
     console.log(persona);   
    }
}
console.log("======================================")

//------------------- forEach---------------------
/*
metodo que se utiliza para iterar colecciones, arreglos.
permite ejecutar una funcion por cada elemento del arreglo
*/

console.table(personasEnCh30);
function iterarEquipos(equipo, indice, arreglo){
    console.log(`Indice ${indice} : ${equipo}`)
    return equipo;
}

/* personasEnCh30.forEach(iterarEquipos); */
personasEnCh30.forEach((equipo,indice) => { equipo
    console.log(`Equipo : ${indice} Integrantes ${equipo}`)
});

//----------------------- uso de break en ciclos---------------------
// break no detiene la ejecucion de la iteracion en curso y termina el ciclo.

for(let index= 0; index < 10; index++ ){
    if (index >= 5) break;
    console.log(index);
}

// realiza tablas de multiplicar del 1 al 5 con for tradicional 

for (let i = 1; i <= 5; i++) {
    for (let j= 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log("==========Uso de break con rompe ciclo ==================")

rompeCiclo:
for (let i = 1; i <= 5; i++) {
    for (let j= 1; j <= 10; j++){
       if (i === 2 && j== 5) break rompeCiclo; 
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log("==========Uso de continue ciclo  ==================")

continuaCiclo:
for (let i = 1; i <= 5; i++) {
    for (let j= 1; j <= 10; j++){
       if (j > 3) continue continuaCiclo; 
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


//==================== Ciclo While=============================
/*
crea un bucle que se ejecuta una sentencia mientras la condicion especificada 
se cumpla.

sintaxis:
    while(condicion) sentencia;

    while (condicion){
        sentencias;
    }
*/

let counter = 1;

/* while (confirm("Quieres continuar?")){
    console.log(`Veces que has continuado: ${counter}`);
    counter ++;
} */

//==================== Ciclo Do-While=============================
/*
crea un bucle que se ejecuta una sentencia mientras la condicion especificada 
se cumpla.la evaluacion se realiza despues de ejecutar la sentencia, por lo tanto,
la sentencia se va a ejecutar por lo menos 1 vez.

sintaxis:

    do{
        sentencias;
    } while (condicion);
*/
let valor = -2;
while(valor < 5){
    console.log(`Valor en While ${valor}`)
    valor ++;
}
valor = 4;
do{
    console.log(`Valor en do-while ${valor}`);
    valor++
} while (valor < 5);