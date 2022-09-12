import logNew from "../../img/icons/New.gif"
let sectionImgBig=document.querySelector("#section-img-one-big")
let elementDiv=document.createElement("div")
let elementImg=document.createElement("img")
let elementImgNew=document.createElement("img")
    elementImgNew.id="logo-new"
    elementImgNew.alt="logo-new"
    elementImgNew.src=logNew
    elementDiv.id="img-big-one"
    elementDiv.className="big-img"
    elementImg.id="img-big"

export const PhotoBig=(photo,page)=>{
        if (page == 1) {
            elementImg.src=photo.src.medium
            elementImg.loading="eager"
            elementImg.style=`background-color:${photo.avg_color}`
            elementImg.alt=photo.alt
            elementImg.addEventListener("click",(e)=>import("./Modal").then(modal=>modal.ModalInfo(photo)))
            elementDiv.appendChild(elementImgNew)
            elementDiv.appendChild(elementImg)
            sectionImgBig.append(elementDiv)
        }
}

export const removerImgBig=(remover=false)=> elementDiv.remove()
