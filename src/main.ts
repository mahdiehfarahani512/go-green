import "./style.css";
const nextbtn=document.getElementById("nxtbtn")as HTMLButtonElement
const privbtn=document.getElementById("pribtn")as HTMLButtonElement
const sliderEl=document.querySelectorAll(".slide")
const btntotopEl=document.getElementById("totop")as HTMLDivElement
const divtobottom=document.getElementById("tobottom")as HTMLDivElement
const htmlEl=document.getElementById("html")as HTMLDivElement
const cssEl=document.getElementById("css")as HTMLDivElement
const jqueryEl=document.getElementById("jquery")as HTMLDivElement
const phpEl=document.getElementById("php")as HTMLDivElement
const counter1=document.getElementById("counter1")as HTMLSpanElement
const counter2=document.getElementById("counter2")as HTMLSpanElement
const counter3=document.getElementById("counter3")as HTMLSpanElement
const counter4=document.getElementById("counter4")as HTMLSpanElement
let count1 = 50
let count2 = 150
let count3 = 250
let count4 = 350


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

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=200){
        btntotopEl.classList.remove("toup")
    }else{
        btntotopEl.classList.add("toup")
    }
})
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=250){
        divtobottom.classList.add("tobott")
    }else{
        divtobottom.classList.remove("tobott")
    }
})

if(window.pageYOffset>=3345){
htmlEl.classList.add("animation1")
cssEl.classList.add("animation2")
jqueryEl.classList.add("animation3")
phpEl.classList.add("animation4")
}
const startAdd1=setInterval(() => {
    counter1.textContent=count1.toString()
    if(count1>=100){
    clearInterval(startAdd1)
  }else{
  count1++
}
}, 30);

const startAdd2=setInterval(() => {
    counter2.textContent=count2.toString()
    if(count2>=200){
    clearInterval(startAdd2)
  }else{
  count2++
}
}, 30);

const startAdd3=setInterval(() => {
    counter3.textContent=count3.toString()
    if(count3>=300){
    clearInterval(startAdd3)
  }else{
  count3++
}
}, 30);
const startAdd4=setInterval(() => {
    counter4.textContent=count4.toString()
    if(count4>=400){
    clearInterval(startAdd4)
  }else{
  count4++
}
}, 30);
