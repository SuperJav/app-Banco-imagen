import titleIcon from "../../img/icons/info.png"
import titleIconClose from "../../img/icons/close.png"
import descargaIcon from "../../img/icons/download.png"

let containerImg=document.querySelector("#container-img")//Variable para almacenar la modal
let containervisible=document.createElement("div")
    containervisible.id="container-visible"
let containerModal=document.createElement("section")//variable para almacenar todos los elemento
    containerModal.id="modal-info"
let containerModalFoto=document.createElement("div")//variable para almacenar el elemento foto
    containerModalFoto.id="modal-info-foto" 
let elementImg=document.createElement("img")
    elementImg.className="modal-photo-img"//variable para almacenar la foto
let containerModalInfo=document.createElement("div")//variable para almacenar toda la informacion de la foto
    containerModalInfo.id="modal-info-info"
let elementH1=document.createElement("h4")
let elementImgIcon=document.createElement("img")
let elementImgIconClose=document.createElement("img")
    elementImgIconClose.id="modal-title-close"
    elementImgIconClose.src=titleIconClose
let containerModalTitulo=document.createElement("div")
    elementImgIcon.id="modal-title-icon"
    elementImgIcon.src=titleIcon
    elementImgIcon.alt="icon-title"
    containerModalTitulo.id="modal-info-titulo"
    containerModalTitulo.appendChild(elementImgIcon)
    containerModalTitulo.append(elementH1)
    containerModalTitulo.appendChild(elementImgIconClose)
let itemsContainerInfo1=document.createElement("div")
    itemsContainerInfo1.className="items-container"
let itemsContainerInfo2=document.createElement("div")
    itemsContainerInfo2.className="items-container"
let itemsContainerInfo3=document.createElement("div")
    itemsContainerInfo3.className="items-container"
let itemsContainerInfo4=document.createElement("div")
    itemsContainerInfo4.className="items-info-link"
let Nautor=document.createElement("h6")
let autor=document.createElement("h6")
let Nsize=document.createElement("h6")
let size=document.createElement("h6")
let Nid=document.createElement("h6")
let id=document.createElement("h6")
let Nlink=document.createElement("a")
    Nlink.textContent="Visitar IG"
    Nlink.id="autor-link"
    Nlink.target="_blank"
let NiconDescarga=document.createElement("img")
    NiconDescarga.src=descargaIcon 
    NiconDescarga.id="icon-descarga-img"
let Ntextdescarga=document.createElement("h5")
    Ntextdescarga.textContent="Descargar"
let Ndescargaimg=document.createElement("button")
    Ndescargaimg.id="button-descarga"
    Ndescargaimg.appendChild(NiconDescarga)
    Ndescargaimg.appendChild(Ntextdescarga)
let foto

function downloandImage(url=false,name=false){
    if (url == false && name==false) {
        false
    }else{
        alert("Espere un momento en lo que la imagen se muestra completamente")
        fetch(url)
            .then(resp=>resp.blob())
            .then(blob=>{
                const url=window.URL.createObjectURL(blob)
                const a=document.createElement("a")
                a.href=url
                a.download=name
                containerModalInfo.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
            }).catch(()=>alert("Tenemos problema para descargar esta imagen lo sentimos :("))
    }
}
Ndescargaimg.addEventListener("click",()=>downloandImage(foto,"imagen.jpeg"))
Ndescargaimg.removeEventListener("click",downloandImage())
    


export function ModalInfo(photo){
    //event
   elementImgIconClose.addEventListener("click",()=>{
        containervisible.remove()
    })
   containervisible.addEventListener("click",(e)=>{

        if (containerModal.contains(e.target)) {
            false
        }else{
            containervisible.remove()
           // window.removeEventListener('scroll',disableScroll)
        }
    })

   elementH1.textContent="Informacion"
   elementImg.alt=photo.alt
   elementImg.src=photo.src.original   
   Nautor.textContent="Foto grafiado por"
   autor.textContent=photo.photographer?photo.photographer:"sin autor"
   Nsize.textContent="Tamaño"
   size.textContent=`${photo.width} X ${photo.height}`   
   Nid.textContent="ID"
   id.textContent=photo.id
   Nlink.href=photo.photographer_url
   foto=photo.src.original
   
   itemsContainerInfo1.appendChild(Nautor)
   itemsContainerInfo1.appendChild(autor)
   itemsContainerInfo2.appendChild(Nsize)
   itemsContainerInfo2.appendChild(size)
   itemsContainerInfo3.appendChild(Nid)
   itemsContainerInfo3.appendChild(id)
   itemsContainerInfo4.appendChild(Nlink)
   itemsContainerInfo4.appendChild(Ndescargaimg)    

   containerModalFoto.appendChild(elementImg)
   containerModalInfo.append(itemsContainerInfo1)
   containerModalInfo.append(itemsContainerInfo2)
   containerModalInfo.append(itemsContainerInfo3)
   containerModalInfo.append(itemsContainerInfo4)
  
   containerModal.appendChild(containerModalTitulo)
   containerModal.appendChild(containerModalFoto)
   containerModal.appendChild(containerModalInfo)
   containervisible.append(containerModal)
   containerImg.appendChild(containervisible)
}

export const removerModal=()=> containervisible.remove()


