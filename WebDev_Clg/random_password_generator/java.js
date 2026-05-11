function password_generator(length,includelowercase,includeuppercase,includenums,includesymbol){
    const includelowerchars="abcdefghijklmnopqrstuvwxyz";
    const includeupperchars="ABCDEFGHIJKLMOPQRSTUVWXYZ";
    const numberchar="0123456789";
    const symbolchar="@#$%&*()-+/*_!";

    let allowedchars="";
    let password=""; 

    allowedchars+=includelowercase ? includelowerchars:"";
    allowedchars+=includeuppercase ? includeupperchars:"";
    allowedchars+=includenums ? numberchar:"";
    allowedchars+=includesymbol ? symbolchar:"";

    if(length<=0){
        return `(Password length should be atleast 1)`;
    }
    if(allowedchars.length==0){
        return `(Password should have atleast 1 char)`;
    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[randomindex];
    }
    return password;
}

const passwordlength=10;
const includelowercase=true;
const includeuppercase=true;
const includenums=true;
const includesymbol=true;

const password=password_generator(passwordlength,includelowercase,includeuppercase,includenums,includesymbol);

console.log(`Generated password:${password}`);