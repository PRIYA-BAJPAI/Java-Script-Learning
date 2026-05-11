const min=1;
const max=100;
const ans= Math.floor(Math.random()*(max-min+1))+min;
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`Guess a number between ${min}-${max}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < min || guess > max){
        window.alert("Please enter a valid number");
    }else{
        attempts++;
        if(guess<ans){
            window.alert("Too Low ! Try something new");
        }else if(guess>ans){
            window.alert("Too High ! Try something new");
        }else{
            window.alert(`Correct! the answer was ${answer}. It took ${attempts} attempts to reach ${ansewer}`);
             
        }
       
    }
    running= false;
}