//.checked = property that determines the checked state of an HTML checkbox or radio button element

const mycheckbox = document.getElementById("mycheckbox");
const UPI = document.getElementById("UPI");
const debitcard = document.getElementById("debitcard");
const gpay = document.getElementById("gpay");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const payresult = document.getElementById("payresult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent=`You are Subscribed !`;
    }else{
        subresult.textContent=`You are NOT Subscribed !`;
    }
    if(UPI.checked){
        payresult.textContent=`You are paying with UPI`;
    }else if(debitcard.checked){
        payresult.textContent=`You are paying with Debit Card`;
    }else if(gpay.checked){
        payresult.textContent=`You are paying with gpay`;
    }else {
        payresult.textContent=`You must select a payment option`;
    }
}