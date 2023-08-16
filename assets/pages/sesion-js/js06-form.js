console.log("Sesión JS06-Form Formularios");

// obtenemos la referencia del formulario 
const registerForm = document.forms["registerForm"];
/* registerForm.addEventListener( "click", fncCallback ); */
registerForm.addEventListener( "submit", (event)=>{
  event.preventDefault();// omitir las acciones de default
  /* console.log(event); */
  /* const email = registerForm.elements["email"]
  const birthdate = registerForm.elements["birthdate"].value;
    console.log(email,birthdate); */
    const user = {
      fullname: registerForm.elements["fullname"].value,
      email: registerForm.elements["email"].value,
      password: registerForm.elements["password"].value,
      birthdate: registerForm.elements["birthdate"].value,
    }
    const age = calculateAge(user);

    if(age.year , 18){
      
    } appendAlert(`Al rato regresas `)

});

const calculateAge = ({birthdate : bd })=>{
  console.log(bd);

  const today = new Date();
  const birthdate = new Date(bd);

  const difference = today - birthdate;
  console.log(difference);
  const age = new Date(difference);
 /*  console.log(age); */
  console.log(`years: ${age.getFullYear()- 1970}`);
  console.log(`months: ${age.getMonth()}`);
  console.log(`days: ${age.getDate()}`);
  return {
    year: age.getFullYear() - 1970 ,
    month: age.getMonth() ,
    day: age.getDate() ,
}
}
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  }) */
/* } */
