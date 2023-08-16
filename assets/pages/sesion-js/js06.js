console.log("Sesion JS06 MANIPULACION DEL DOM");

const findElementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log(typeof title);
    console.log(title.innerHTML);
    
   /*  title.innerHTML = `Generation Sesion JS06`; */
    title.innerHTML = `<span id="generation" class = "text-primary">Generation</span> Sesion JS06`;
}
findElementById();

//--------- Encontrar elementos por tu etiqueta (tag)-----------------------------

const changeElementsByTagName = () => {
    const underList = document.getElementsByTagName("li");
    console.log(underList);

    for (const listItem of underList) {
        listItem.innerHTML = `<span class= "text-success"> ${listItem.innerHTML} 🛸 </span>` 
    }
}
changeElementsByTagName();

//--------------- uso de selector universal--------
/// querySelector

const findElementByQuerySelector = () => {
    /* const element = document.querySelector("#title"); */
   /*  const element = document.querySelector(".text-warning"); */
    /* const element = document.querySelector("ul"); */
    const element = document.querySelector("h1 span");
    console.log( element );
}
findElementByQuerySelector();

//-------- crear nuevo elemento HTML----------------
// apendChild

const newElement = () => {
    const newElement = document.createElement("div");

    newElement.innerHTML = `La Ch30 le gusta:
    <ul>
        <li> El helado </li>
        <li> El chisme </li>
        <li> Corridos tumbados </li>
        <li> Escuchar a mau </li>
        <li> ser amigos </li>
     </ul>
`;    
const descriptionCH30 = document.querySelector("#descriptionCh30");
descriptionCH30.appendChild(newElement);

}

newElement();

//---------------- Cambiar color de texto--------------------
//style.color

const changeColor = (color) => {
    const descriptionCH30 = document.getElementById("descriptionCh30");
    descriptionCH30.style.color = color;
    descriptionCH30.style.border = `thin solid ${color}`;
}
changeColor("beige");

//---------------------------- propiedades de visualizacion ------------------
// display: none (quitar el elemento DOM)
// visibility: hidden (ocultar el elemento)

const referenceTitleGeneration = () => {
    return document.getElementById("generation");
}

const displayNoneElement = () =>{
 const generation = referenceTitleGeneration();
 generation.style.display = "none";
}
const hiddenElement = () => {
    const generation =referenceTitleGeneration();
    generation.style.visibility = "hidden";
}
const resetElement = () => {
    const generation = referenceTitleGeneration();
    generation.style.visibility = "visible";
    generation.style.display = "inline";
}







