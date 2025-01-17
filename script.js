import {postMessage} from './firebase/license.js'

const menuIcon = document.getElementById("menu-icon")
const menuBar = document.getElementById("menu-bar")
const closeIcon = document.getElementById("close-icon")
const btnSend = document.getElementById("btn-send")
// True = showed and false = not showed



menuIcon.addEventListener("click", () => {  
         menuBar.style.display = "block"
       // menuBar.classList.add("active")
         closeIcon.style.display = "block"
      //  closeIcon.classList.add("active")
         menuIcon.style.display ="none";
        // menuIcon.classList.add("inactive")
         const itemsMenuBar = document.querySelectorAll("nav a");
         menuBar.classList.add("desplegable");
         for(const item of  itemsMenuBar){
            item.classList.add("desplegable2")
         } 

})
closeIcon.addEventListener("click", ()=>{
    closeIcon.style.display ="none"
    menuIcon.style.display ="block"
    menuBar.style.display ="none"
    menuBar.classList.remove("desplegable");
    const itemsMenuBar = document.querySelectorAll("nav a");
    for(const item of  itemsMenuBar){
       item.classList.remove("desplegable2")
    } 
})
function sendMessage (e){
    e.preventDefault();
    
    let name = document.getElementById("name");
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    const answer =  postMessage({

        name : name.value ,
        email : email.value,
        message : message.value

    })

    if(answer.id !== null){
         cleanForm()
         console.log("registrado")
         appendAlert('Su mensaje se ha registrado correctamente!', 'success')
    }else{
        console.log("error",  answer)
        appendAlert('Su mensaje no se ha registrado, intentelo de nuevo', 'danger')
    }
}
// Form of messages
btnSend.addEventListener( "submit", sendMessage )

const cleanForm = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    name.value =""
    email.value=""
    message.value=""
}
const removeAlert = () => {
    const alert = document.querySelector(".alert")
    console.log("borra")
    alert.remove();
   
  }

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
//   const ctn = document.createElement("div")
 // ctn.setAttribute( id,"liveAlertPlaceholder" )
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  
  alertPlaceholder.append(wrapper);
//   const body = document.getElementsByTagName("form")
//   body.append(ctn)
  setTimeout(removeAlert,5000)
}


// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }
