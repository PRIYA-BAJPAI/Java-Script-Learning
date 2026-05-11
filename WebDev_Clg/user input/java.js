// document.getElementById("myID").textContent='hello';



// let age=18;
// let salary=50000;
// let bonus=5000;

// document.getElementById("myID").textContent=age+salary+bonus;

let username;
document.getElementById("mysubmit").onclick=function(){  //what the code will perform when submit button is clicked
    username=document.getElementById("username").value;  //for username record
    console.log(username);
    document.getElementById("myid").textContent=`Hello ${username}`;  //to change welcome to hello username(from input)
}
