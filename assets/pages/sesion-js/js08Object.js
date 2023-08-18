console.log("Sesion JS08 - OOP");

const registerForm = document.forms["registerForm"];

registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); 

    const user = {
        fullname: registerForm.elements["fullname"].value, 
        email : registerForm.elements["email"].value, 
        password : registerForm.elements["password"].value,        
    }
    console.table(user);
    postUser(user);
    //debemos convertir el objeto user a objeto JSON
    localStorage.setItem("user", JSON.stringify(user)); // key,value
}  );

const postUser = async (userData)=>{
    const url= "https://reqres.in/api/register";
    userData.email = "eve.holt@reqres.in";

  const responseJSON = await fetch(url, {
    method:"POST", //POST,PUT,DELETE,GET
    body: JSON.stringify(userData) , //datos del usuario
    headers: {"Content-Type" : "application/json"},
  });

  const response = await responseJSON.json(); // convertir de JSON a object de JS

alert(`${response.id}: ${response.token}`);
console.log(response);
response.id && alert(`${response.id}: ${response.token}`);

// iterar sobre un objeto

  for (const key in response){
    console.log(`clave: ${key}, value: ${response[key]}`)
  }



}