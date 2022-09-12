import flechaUpImg from "../../img/up.png"

let containerImg=document.querySelector("#container-img")
let buttonUp=document.createElement("a")
let img=document.createElement("img")
   img.src=flechaUpImg
   img.alt="icon-go-up"
   buttonUp.id="button-up"
   buttonUp.href="#Banco-de-imagenes"
   buttonUp.appendChild(img)

//return a buttonUP
export const ButtonUp=(up=false)=>up && buttonUp.isConnected?buttonUp.remove():containerImg.appendChild(buttonUp)