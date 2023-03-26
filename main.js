var key = document.querySelectorAll(".key")
var inb = document.querySelector("input")
var clear = document.querySelector(".key_clear")
var calc = document.querySelector(".key_calculate")

key.forEach((i)=>{
    i.addEventListener("click",(t)=>{
        inb.value +=t.target.innerHTML;
    })
})

clear.addEventListener("click",()=>{
    inb.value="";
})

calc.addEventListener("click",()=>{
    inb.value = eval(inb.value);
})