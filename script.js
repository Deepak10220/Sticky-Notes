let count = 0;

let counter = document.querySelector(".counter");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let decrease = document.querySelector(".decrease");

increase.addEventListener("click" , ()=>{
    count++;
    counter.innerText = count;
})

reset.addEventListener("click" , ()=>{
    count=0;
    counter.innerText = count;
})

decrease.addEventListener("click" , ()=>{
    count--;
    counter.innerText = count;
})
