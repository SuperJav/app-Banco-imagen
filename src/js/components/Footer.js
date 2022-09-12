import iconLinkedin from "../../img/icons/linkedin.png"
import iconInstagram from "../../img/icons/instagram.png"
import iconGitHub from "../../img/icons/github.png"

const ICONS=[
        {
            img:iconGitHub,
            alt:"icon-gitHub",
            src:"https://github.com/SuperJav?tab=repositories"
        },
        {
            img:iconInstagram,
            alt:"icon-instagram",
            src:"https://www.instagram.com/javisuper_/"
        },
        {
            img:iconLinkedin,
            alt:"icon-linkedin",
            src:"https://www.linkedin.com/in/javielito-ramirez-brioso-53402321b/"
        }
    ]


let containerMain=document.querySelector(".container-main")
let containerFooter=document.createElement("footer")
let containerRedSocial=document.createElement("div")
let elementHr=document.createElement("hr")
let elementH4=document.createElement("h4")
    containerRedSocial.id="container-red-social"
    elementHr.id="footer-linea"
    elementH4.textContent="Developed by Javi super🧑🏽‍💻"
    elementH4.id="footer-text"
    containerFooter.id="footer"

ICONS.map(index=>{
    let elementImg=document.createElement("img")
    let elementA=document.createElement("a")
    const { img,alt,src }=index
    elementImg.src=img
    elementImg.alt=alt
    elementA.href=src
    elementA.target="_black"
    elementA.append(elementImg)
    containerRedSocial.append(elementA)
})
    
export let Footer=()=>{
    containerFooter.appendChild(elementH4)
    containerFooter.appendChild(elementHr)
    containerFooter.appendChild(containerRedSocial)
    containerMain.appendChild(containerFooter)
}