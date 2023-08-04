console.log("pagina en cosntruccion con Patricio Estrella")

function clickPatricio(){
    alert("La mayonesa es un istrumento?");
}
function changeColor(elementHTML, color){
    console.log(elementHTML);
    console.log(color);

    elementHTML.style.color= color
}

function changeColorWithPromt(elementHTML){
    const color= prompt("Dime el color en ingles", "yellow")
    elementHTML.innerHTML= "<h3> Ahora soy <em>" + color + "</em> </h3>";
    changeColor(elementHTML, color);
}

function changeText(element, color){
    element.innerHTML = "<h3> Ahora soy <em>" + color + "</em> </h3>";

}
function changeName(){
    const userName = prompt("Escribe tu nombre cholo", "Machete");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = `Hola ${userName}, la clika te respalda`;
}









function resetColor(){
   const refRedColor = document.getElementById("red-color");
   const refGreenColor = document.getElementById("green-color");
   const refPurpleColor = document.getElementById("purple-color");
   const refUserColor = document.getElementById("user-color");

   changeColor(refRedColor, 'black');
   changeColor(refGreenColor, 'black');
   changeColor(refPurpleColor, 'black');
   changeColor(refUserColor, 'black');
}