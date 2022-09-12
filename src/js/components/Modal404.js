import imagen from "../../img/404.png"

let queryContainerMain=document.querySelector("#container-img")
let section=document.createElement("div")
let img=document.createElement("img")
let titulo=document.createElement("h4")
let buttonModalHome=document.createElement("button")

    buttonModalHome.id="button-modal-home"
    buttonModalHome.innerHTML='<a href="/">Volver a inicio</a>'
    titulo.textContent="Imagenes no encontrada!"
    titulo.id="modal-titulo"
    img.id="modal-404"
    img.src=imagen
    img.alt="404 error"
    section.id="modal"

//modal for photos not found
export const Modals=(authorization=false)=>{
    section.appendChild(titulo)
    section.appendChild(img)
    section.appendChild(buttonModalHome)
    authorization == true?section.remove():queryContainerMain.insertAdjacentElement("afterbegin",section)
}

