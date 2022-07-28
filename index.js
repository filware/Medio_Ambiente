const lista=document.getElementById("listaB");
const all=document.querySelector("body")
const todo=document.getElementById("cuerpo")

document.getElementById("ver").addEventListener("mousemove",()=>{lista.style.display="block";todo.style.opacity="20%";all.style.overflowY="hidden"});
document.getElementById("verA").addEventListener("mousemove",()=>{lista.style.display="block";todo.style.opacity="20%";all.style.overflowY="hidden"});
document.getElementById("verA").addEventListener("mouseout",()=>{lista.style.display="none";todo.style.opacity="100%";all.style.overflowY="auto"})
lista.addEventListener("mousemove",()=>{lista.style.display="block";todo.style.opacity="20%";all.style.overflowY="hidden"});
lista.addEventListener("mouseout",()=>{lista.style.display="none";todo.style.opacity="100%";all.style.overflowY="auto"})  ;

const envioA=document.getElementById("envioA")
envioA.addEventListener("click",()=>{
    lista.style.display="none"
    let cont=0
    const tiempo=setTimeout(()=>{
        cont+=1
        const iframeContent=document.getElementById("iframeContent")
        iframeContent.src="https://www.youtube.com/embed/M_aeK_CXpjc"
        iframeContent.style.display="block"
        all.style.overflowY="hidden"
        todo.style.opacity="20%";
        if(cont===1){
            clearTimeout(tiempo)
        }
    },1000)
})
const envioB=document.getElementById("envioB")
envioB.addEventListener("click",()=>{
    lista.style.display="none"
    let cont=0
    const tiempo=setTimeout(()=>{
        cont+=1
        const iframeContent=document.getElementById("iframeContent")
        iframeContent.src="https://www.youtube.com/embed/M3SpvL8mZAk"
        iframeContent.style.display="block"
        all.style.overflowY="hidden"
        todo.style.opacity="20%";
        if(cont===1){
            clearTimeout(tiempo)
        }
    },1000)
})
const envioC=document.getElementById("envioC")
envioC.addEventListener("click",()=>{
    lista.style.display="none"
    let cont=0
    const tiempo=setTimeout(()=>{
        cont+=1
        const iframeContent=document.getElementById("iframeContent")
        iframeContent.src="https://www.youtube.com/embed/M_aeK_CXpjc"
        iframeContent.style.display="block"
        all.style.overflowY="hidden"
        todo.style.opacity="20%";
        if(cont===1){
            clearTimeout(tiempo)
        }
    },1000)
})
const envioD=document.getElementById("envioD")
envioD.addEventListener("click",()=>{
    lista.style.display="none"
    let cont=0
    const tiempo=setTimeout(()=>{
        cont+=1
        const iframeContent=document.getElementById("iframeContent")
        iframeContent.src="https://www.youtube.com/embed/bR2X6sqsAiY"
        iframeContent.style.display="block"
        all.style.overflowY="hidden"
        todo.style.opacity="20%";
        if(cont===1){
            clearTimeout(tiempo)
        }
    },1000)
})
const envioE=document.getElementById("envioE")
envioE.addEventListener("click",()=>{
    lista.style.display="none"
    let cont=0
    const tiempo=setTimeout(()=>{
        cont+=1
        const iframeContent=document.getElementById("iframeContent")
        iframeContent.src="https://www.youtube.com/embed/zeLIGu8l9OY"
        iframeContent.style.display="block"
        all.style.overflowY="hidden"
        todo.style.opacity="20%";
        if(cont===1){
            clearTimeout(tiempo)
        }
    },1000)
})
//
todo.addEventListener("click",()=>{
    iframeContent.style.display="none"
    all.style.overflowY="scroll"
    todo.style.opacity="100%";
})
function saber(dato){
    Imagenes.style.display=`${dato}`
}
const verImagenes=document.getElementById("cell")
const Imagenes=document.getElementById("imagenes")
verImagenes.addEventListener("mousemove",()=>{
    verImagenes.style.display="none"
    saber("block")
})
Imagenes.addEventListener("mouseleave",()=>{
    verImagenes.style.display="block"
    saber("none")
})
const documento=document.getElementById("listAlter")
function mouse(){
    const ventanaCap=window.scrollY;
    const ventanaCom=window.innerHeight;
    if((ventanaCom/2)>ventanaCap){
        documento.style.position="fixed"
    }else{
        documento.style.position="absolute"
    }
}