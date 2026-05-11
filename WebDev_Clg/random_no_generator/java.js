const mybutton=document.getElementById("mybutton");
const mylabel=document.getElementById("mylabel");
const min=1;
const max=6;
let randomno;

mybutton.onclick=function(){
    randomno=Math.floor(Math.random()*max)+min;
    mylabel.textContent=randomno;
}