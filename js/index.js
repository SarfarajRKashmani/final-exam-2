import { getElement } from "../components/helper.js";
import { navbar,style,footer } from "../components/navbar.js";
    const nabar=getElement("nav")
    nabar.innerHTML=navbar();

    document.addEventListener("DOMContentLoaded", function(){
       const styleTag=document.createElement("style")
       styleTag.innerHTML=style();
       document.head.appendChild(styleTag);
    })

    const footr=getElement("foot")
    footr.innerHTML=footer();