const form = document.querySelector(".form")
const input = document.querySelector(".inp")
const msgContainer = document.querySelector(".msg__container")
const timestamp = document.querySelector('.timestamp');

const TEXTS = [
    "salom",
    "qalesiz",
    "nma gapla",
    "ok",
    "qattasiz"
]
      
      

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const value = input.value
    if(value===""){
        return null
    }
    const el = document.createElement("div")
    el.classList.add("msg", "me")
    el.innerHTML = `
        <p>${value}</p>
        <span>${getCurrentTime()}</span>
    `
    msgContainer.appendChild(el)
    input.value = ""
    botMsg()

})
function botMsg (){
    let index  =Math.floor(Math.random()* TEXTS.length)

    const el = document.createElement("div")
    el.classList.add("msg")
    el.innerHTML = `
        <p>${TEXTS[index]}</p>
        <span>${getCurrentTime()}</span>
    `
    msgContainer.appendChild(el)
}
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}