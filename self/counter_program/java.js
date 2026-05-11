const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("countlabel");
let count = 0;
increase.onclick = function(){
    count++;
    countlabel.textContent = count;  //if increase.textcontent increase btn will change its value by 1
}
decrease.onclick = function(){
    count--;
    countlabel.textContent = count;  
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;  
}