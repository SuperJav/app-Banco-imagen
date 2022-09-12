import {createClient} from 'pexels'
import * as dotenv from 'dotenv'
dotenv.config()
import { Loadings } from './components/Loandings'
import { Modals } from './components/Modal404'
import { ButtonUp } from "./components/ButtonUp"
import { Footer } from "./components/Footer"
import { PhotoBig,removerImgBig } from './components/PhotosBig'
import { ModalInfo,removerModal } from './components/Modal'

const CLAVE_API_PEXELS=process.env.CLAVE_API_PEXELS
const client= createClient(CLAVE_API_PEXELS)
let queryBoxAllPhotos=document.querySelector("#section-img-all")
let containerbigPhoto=document.querySelector("#section-img-one-big")
const buttonSeach= document.querySelector("#button-seach")
const elementinput=document.querySelector("#buscador")
const input_seach=document.querySelector("#buscador")
let buttonMorePhotos=document.createElement("button")
buttonMorePhotos.innerHTML="<span></span><span></span><span></span><span></span>Mostrar mas"
buttonMorePhotos.id="button-more-photos"
let wanted
let contador=1

newPhoto()
//return Button of mores photos
const Morephotos=(result=0)=>{
   
    buttonMorePhotos.addEventListener("click",()=>{
        Loadings()
        contador++
        input_seach.value==""?newPhoto(contador):seachPhotos(input_seach.value,contador)
    })

    if (buttonMorePhotos.isConnected) {
        buttonMorePhotos.remove()
    }
    window.onscroll=()=>{
        ButtonUp(true)
        if ( document.documentElement.scrollTop > 50 && result >= 78) {
            document.getElementById("content-button-more").appendChild(buttonMorePhotos)
        }
        document.documentElement.scrollTop>10?ButtonUp():false
    }
}

//return new photos
function newPhoto(page=1) {
    Loadings()
    client.photos.curated({page:page,per_page:80})
            .then(photos=>{
                PhotoBig(photos.photos[0],page)
                seephotos(photos)
                Morephotos(photos.total_results)
            })
}

const infiniti=()=>{
    if (input_seach.value=="Ana zamora") {
        removerImgBig(true)
        Morephotos()
        while (queryBoxAllPhotos.firstChild) {
            queryBoxAllPhotos.removeChild(queryBoxAllPhotos.firstChild);  
        }
        import("../js/components/Infinito").then(infiniti=>infiniti.Infinito())  
    }else{
        if (input_seach.value != wanted) {
            seachPhotos(input_seach.value)
        }else if(input_seach.value==""){
            alert("Ingresar una palabra!")
        }else{
            alert("ya esta Mostrada!")
        }
        
    }
}
buttonSeach.addEventListener("click",infiniti)
elementinput.addEventListener("keydown",(e)=>{
    if (e.key =="Enter") {
        infiniti()  
    }
})

//return photos seachs
function seachPhotos(query,page=1){
        removerModal()
        Loadings()
        client.photos.search({query,page,per_page:80})
            .then(photos=>{
               seephotos(photos)
               Morephotos(photos.total_results)
               wanted=query
            })
}
// return photos and see photos on the app
const seephotos=(photos)=>{

        if (input_seach.value =="") {
        }else if(input_seach.value != "" && input_seach.value != wanted){
            while (queryBoxAllPhotos.firstChild) {
                queryBoxAllPhotos.removeChild(queryBoxAllPhotos.firstChild); 
            }
            containerbigPhoto.firstChild?containerbigPhoto.remove():false
            removerImgBig(true)
            contador=1
        }
       if (photos.total_results != 0) {
                Modals(true)
                photos.photos.map(photo=>{
                    const img =document.createElement("img")
                    img.loading="eager"
                    img.style=`background-color:${photo.avg_color}`
                    img.src=`${photo.src.portrait}`
                    img.alt=photo.alt
                    img.addEventListener("click",(e)=>ModalInfo(photo))
                    //img.addEventListener("click",(e)=> import("./components/Modal").then(modal=>modal.ModalInfo(photo)))
                    queryBoxAllPhotos.appendChild(img)})

       } else if(photos.total_results == 0) {
        Modals()
       }
       Footer()
}



    













