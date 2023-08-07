console.log("Bienvenido a la sesion JS 01");
// 7 Datos  primitivos:
// numbers,string,boolean,null,undefined,bigint,symbol

// tipos de datos en JS:
// primitivos y no primitivos 

// no primitivos 
// object

// tipo de dato string 
const stringData ="Holi crayoli"

// tipo de dato number 
// numeros positivos, negativos, decimales,NaN,+infinity,-infinity
// para un salto de linea se puede utilizar /n, pero en template string no es necesario
console.log( `Tipos de datos number: 
${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}` );
console.log( " -- \n \"texto entre comillas dobles \" --  ");
console.log( ' -- \n "texto entre comillas dobles " --  ');

console.log( `Valor máximo representable en JavaScript: ${ Number.MAX_VALUE }`) // 1.7976931348623157e+308
console.log( `Si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310} `) // Infinity

console.log( `Valor (entero) máximo seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER } ` ) // 9007199254740991
// Cuando se realizan operaciones que exceden los límites de MAX_SAFE_INTEGER
// se produce una pérdida de precisión.
console.log( `MAX_SAFE_INTEGER + 1: ${ Number.MAX_SAFE_INTEGER + 1 } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ Number.MAX_SAFE_INTEGER + 2 } ` ) // 9007199254740992 (incorrecto)
console.log( `MAX_SAFE_INTEGER + 3: ${ Number.MAX_SAFE_INTEGER + 3 } ` ) // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ Number.MAX_SAFE_INTEGER + 4 } ` ) // 9007199254740996 (incorrecto)

// tipos de datos BigInt
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puede representar o no es seguro.
console.log( "Operaciones con BigInt ")
const myBigInt = 9007199254740991n;
console.log( `MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${ myBigInt + 2n } ` ) // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 3: ${ myBigInt + 3n } ` ) // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${ myBigInt + 4n } ` ) // 9007199254740996

// tipo de dato boolean
// se tiene 2 estados: true /false
console.log( `Tipo de dato verdadero: ${true} `);
console.log( `Tipo de dato falso: ${false} `);

// tipo de dato undefined
// Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log( `Tipo de dato undefined: ${myVar}` )

// tipo de dato null
// una variable que intensionalmente se borra el tipo de dato 
let myVarNull; // undefined
console.log(`tipo de dato myVarNull: ${ typeof myVarNull}` );
myVarNull = "no me gusta YLE";
console.log(`tipo de dato myVarNull: ${ typeof myVarNull}`);
myVarNull = null;
console.log(`myVarNull es null: ${ myVarNull === null}`);

// tipo de dato symbol
// Representa un valor único que se puede utilizar como clave en objetos o identificador único
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo"
console.log(`mySymbol === mySymbol2   ${ mySymbol === mySymbol2} `);

const myObj = {
    clave: "valor",
    [mySymbol] : 16,
    myKey: 123,
    [myKey] : 567,
}

console.log(myObj);

// tipos de datos Object
const misDatosDePerfil = {
    name: "Fer",
    lastName : "Tella",
    age: 29,
    fullName : function(){
        return `Nombre completo Fer : ${this.name} ${this.lastName}`;
    },
    fullNameUpper : function(){
        return `Nombre completo Fer : ${this.name.toUpperCase()} ${this.lastName.toUpperCase()}`;
}
}
console.log( misDatosDePerfil);
console.table( misDatosDePerfil);
console.log( misDatosDePerfil.fullName);
console.log( misDatosDePerfil.fullName());
console.log(misDatosDePerfil.fullNameUpper());

//.........................................
//conversion explicita de datos (coercion de tipo)
const horaDescanso = 13;
console.log("hora de descanso" + horaDescanso + "h.");
const horaDescansoTxt = String(horaDescanso);
console.log("hora de descanso" + horaDescansoTxt + "h.");

const colorVerde = 0x008000;
console.log(`El valor RGB del color verde es: ${colorVerde}`);
console.log(`El valor RGB del color verde es: ${String(colorVerde)}`);
console.log(`El valor RGB del color verde es: ${colorVerde.toString()}`);
console.log(`El valor RGB del color verde es: #${colorVerde.toString(16)}`);


// conversion a number 
const myAgeTxt = "25";
const sumatoria = 10 + myAgeTxt;
console.log(`valor de la sumatoria ${sumatoria}`);
console.log(`valor de la sumatoria ${10 + Number(myAgeTxt)}`);
console.log(`valor de la sumatoria ${10 + parseInt(myAgeTxt)}`);

// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log( parseInt(100.567)); // 100
// - Number devuelve NaN si la cadena contiene algún caracter no numérico
// - parseInt convierte los enteros hasta encontrar una caracter no numérico
//       Si la entrada no comienza con un valor numérico, devuelve NaN
console.log( Number("123 - 456" ) ); // NaN
console.log( parseInt("123 - 456" ) ); // 123
console.log( parseInt("$123 - 456" ) ); // NaN
console.log( Number( true ) ); // 1
console.log( parseInt( true ) ); // NaN

// conversion a booleano
// en la conversion de boolean los siguientes valores son false:
// "",0,null,undefined
