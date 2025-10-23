import "./style.css";
const nextbtn=document.getElementById("nxtbtn")as HTMLButtonElement
const privbtn=document.getElementById("pribtn")as HTMLButtonElement
const sliderEl=document.querySelectorAll(".slide")


nextbtn?.addEventListener("click",()=>{
    const currentEl=document.querySelector(".current")
    currentEl?.classList.remove("current")
    if(currentEl?.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current")
    }else{
        sliderEl[0].classList.add("current")
    }
})
privbtn?.addEventListener("click",()=>{
    const currentEl=document.querySelector(".current")
    currentEl?.classList.remove("current")
    if(currentEl?.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current")
    }else{
        sliderEl[0].classList.add("current")
    }
})
setInterval(()=>{
       const currentEl=document.querySelector(".current")
        currentEl?.classList.remove("current")
        if(currentEl?.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("current")
    }else{
        sliderEl[0].classList.add("current")
    }

},5000)
