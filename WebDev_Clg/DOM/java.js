// const { createElement } = require("react")

// h1.innerText="bye"
// let h1=document.querySelector("h1")
// h1.innerText="bye"
// let para=createElement("p");
// h1.append(para);

console.log("hello")
let inp=document.querySelector("input")
let h1=document.querySelector("h1")

// inp.addEventListener("input",(e)=>{
//     h1.innerText=e.target.value
// })
let add=document.getElementById("add")
add.addEventListener("click",()=>{
    h1.innerText+=inp.value //+ sign to concatinate
    inp.value=""
})
let delet=document.getElementById("delete")
delet.addEventListener("click",()=>{
    h1.innerText=""
    inp.value=""
})

// setInterval(()=>{          //har 5 sec me o/p dikhega 
//     console.log("hello");
// },5000)
setTimeout(()=>{          //3 sec ke baad ek baar hi o/p ayega
    console.log("bye")
},3000)