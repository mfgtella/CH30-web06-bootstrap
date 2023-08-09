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

