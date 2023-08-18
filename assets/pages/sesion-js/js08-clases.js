console.log("JS08 class");

const getProducts = async ()=>{
    const url = "https://fakestoreapi.com/products";
    //const url = "https://reqres.in/api/users?page=2";

    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response)
}

// el nombre de las clases se realizan con UpperCamelCase
class Products{
 // definimos atributos

 // el metodo constructor nos ayuda a instanciar(crear) un objeto
constructor(id, name){
    this.name = name;
    this.id = id;
    this.createdAt = new Date ().getTime();
    console.log(`producto ${this.name} se creo el ${new Date().toLocaleString()}`)
}
lifeSpan(){
    return new Date().getTime() - this.createdAt;
}
} 

function createProductsOfClassProducts(){
    // instanciar la clase Products, para crear un objeto 
    const zote = new Products(1, "Zote");
    const products = [];
    products.push(zote);
    products.push( new Products(2, "palmolive"));
    products.push( new Products(3, "Coca-cola 2L"));
    products.push( new Products(4, "Cajeta Coronado"));
    products.push( new Products(5, "Gelatina"));
    products.push( new Products(6, "Herdez"));
    products.push( new Products(7, "Salsa valentina"));
    products.push( new Products(8, "Nissin"));

    //console.table(products);
    return products;
}

function lifeSpanProducts(products){
   // map sobre un arreglo, itera sobre cada elemento del arreglo y entrega una nuevo
const productLifeSpan = products.map( product => 
    `<li>${product.name} se creo hace ${product.lifeSpan() / 1000} s. </li>` );
    return productLifeSpan;
}

function insertListItems(listItems){
    const products = document.getElementById("products");
    const unorderList = `<ul> ${listItems.join("")} </ul>`

    products.innerHTML = unorderList;
}

function onClickLifeSpan(){
const products = createProductsOfClassProducts();
setTimeout( ()=>{
    const productListItem = lifeSpanProducts(products);
insertListItems(productListItem);  } , 5000);

}