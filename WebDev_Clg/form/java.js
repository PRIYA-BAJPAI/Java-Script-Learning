let form=document.querySelector("#formData")
form.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("hehe");
    
    let userdata={
        name:form[0].value,
        email:form[1].value,
        pass:form[2].value
    }
    localStorage.setItem('data',JSON.stringify(userdata))
})