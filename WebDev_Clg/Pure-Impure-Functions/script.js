//Pure Function
function double(num){
    return 2*num;
}
console.log("Pure fn")
console.log(double(5));
console.log(double(5));

//Impure Function
let count=0;
function fun1(){
    count++;
    return count
}
console.log("Impure fn")
console.log(fun1());
console.log(fun1());
