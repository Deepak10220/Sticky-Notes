let ct = document.querySelector(".left-item").children;
let btn = document.querySelector("button");
let right_container = document.querySelector(".sub");
let spna =document.querySelector("span");
btn.addEventListener("click",()=>{
    let colorValue = ct[1].value;
    let text = ct[0].value;
    if(ct[0].value === ""){
        alert("Please enter some text !");
        return;
    }
    makeStickyNotes(text,colorValue);
    ct[0].value="";
    let btn2 = document.querySelectorAll(".btn2");
    btn2.forEach((singlebtn)=>{
        singlebtn.addEventListener("click",(e)=>{
            e.target.parentElement.remove();
            if(ct[0].value === ""){
                spna.innerText = "You have not added a note yet.";
            }
        })
    })

});

function makeStickyNotes(text,color){
    console.log(text,color);
    let div = document.createElement("div");

    div.style.margin = "5px"
    div.style.display = "inline-block"


    div.innerHTML=`
    <p style="font-size:2rem; font-family: Arial, Helvetica, sans-serif;">${text}</p>
    <button class="btn2" style="width:100%; border-radius:5px; font-family: sans-serif; font-weight: bold;">Delete</button>`;
    div.style.backgroundColor = color;
    div.style.padding = "1rem";
    div.style.borderRadius = "10px";
    right_container.appendChild(div);
    spna.innerText="";
}

