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