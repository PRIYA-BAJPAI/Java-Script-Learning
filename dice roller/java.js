function rollDice(){
    const noofdice = parseInt(document.getElementById("Dice").value);
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];
    for(let i=0;i<noofdice;i++){
        const randomvalue=Math.floor(Math.random()*6)+1;
        values.push(randomvalue);
        images.push(`<img src="images/${randomvalue}.png" alt="Dice${randomvalue}">`);
    }
    diceresult.textContent=`dice:${values.join(', ')}`;
    diceimage.innerHTML=images.join('');
}