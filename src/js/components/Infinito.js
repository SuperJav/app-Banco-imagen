import foto1 from "../../img/infinitiJS/1.jpeg"
import foto2 from "../../img/infinitiJS/2.jpeg"
import foto3 from "../../img/infinitiJS/3.jpeg"
import foto4 from "../../img/infinitiJS/4.jpeg"
import foto5 from "../../img/infinitiJS/5.jpeg"
import foto6 from "../../img/infinitiJS/6.jpeg"
import foto7 from "../../img/infinitiJS/7.jpeg"
import foto8 from "../../img/infinitiJS/8.jpeg"
import foto9 from "../../img/infinitiJS/9.jpeg"
import foto10 from "../../img/infinitiJS/10.jpeg"
import foto11 from "../../img/infinitiJS/11.jpeg"
import foto12 from "../../img/infinitiJS/12.jpeg"
import foto13 from "../../img/infinitiJS/13.jpeg"
import foto14 from "../../img/infinitiJS/14.jpeg"
import foto15 from "../../img/infinitiJS/15.jpeg"
import foto16 from "../../img/infinitiJS/16.jpeg"
import foto17 from "../../img/infinitiJS/17.jpeg"
import foto18 from "../../img/infinitiJS/18.jpeg"
import foto19 from "../../img/infinitiJS/19.jpeg"
import foto20 from "../../img/infinitiJS/20.jpeg"
import foto21 from "../../img/infinitiJS/21.jpeg"
import foto22 from "../../img/infinitiJS/22.jpeg"

const FOTOS=[{foto:foto1},{foto:foto2},{foto:foto3},{foto:foto4},{foto:foto5},{foto:foto6},{foto:foto7},
        {foto:foto8},{foto:foto9},{foto:foto10},{foto:foto11},{foto:foto12},{foto:foto13},{foto:foto14},
        {foto:foto15},{foto:foto16},{foto:foto17},{foto:foto18},{foto:foto19},{foto:foto20},{foto:foto21},
        {foto:foto22}]
let containerbigPhoto=document.querySelector("#section-img-one-big")
const containerAllPhoto=document.querySelector("#section-img-all")
let elementH3=document.createElement("h3")
elementH3.id="infiniti-h3"
elementH3.textContent="🌹La Flor mas hermosa que Dios pudo crear!!🌹"

export const Infinito=()=>{
    containerbigPhoto.append(elementH3)
    FOTOS.map(index=>{
        let elementImg=document.createElement("img")
        elementImg.src=index.foto
        containerAllPhoto.appendChild(elementImg)
    })

}