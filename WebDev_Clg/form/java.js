let form=document.querySelector("#formData")
let del=document.querySelector("#btn")
//signup
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("hehe");
    
    let userdata={
        name:form[0].value,
        email:form[1].value,
        pass:form[2].value
    }
    localStorage.setItem('data',JSON.stringify(userdata))
})

//h tags inner contents
let h1=document.querySelector("h1")
let h2=document.querySelector("h2")
let h3=document.querySelector("h3")

let data=JSON.parse(localStorage.getItem("data"))
if(data){
    h1.innerText=data.name 
    h2.innerText=data.email
    h3.innerText=data.pass
}

//to delete data
del.addEventListener("click",(e)=>{
    localStorage.removeItem("data")
})

//login
let log=document.querySelector("#loginpg")
log.addEventListener("submit",(e)=>{
    e.preventDefault()
    let loginsavedata=JSON.parse(localStorage.getItem("data"))
    let logininputdata={
        email:log[0].value,
        pass:log[1].value
    }
    if(loginsavedata.email===logininputdata.email && loginsavedata.pass===logininputdata.pass){
        alert("LOGIN SUCCESSFUL")
    }else{
        alert("ERROR")
    }
})