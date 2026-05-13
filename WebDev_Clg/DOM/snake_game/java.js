let canvas=document.querySelector("canvas")
let pen=canvas.getContext("2d")  //selects which type of canvas we want
let snakecell=[[0,0]]
let cell=50
let direction='right'  
let gameOver='false'
let randomCell=generateR()
let score=0
let id=setInterval(()=>{
    draw();
    update()
},200)
 document.addEventListener("keydown",(e)=>{
    if(e.key=='ArrowUp'){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }else if(e.key=='ArrowRight'){
        direction='right'
    }else{
        direction='left'
    }
})
function draw(){
    if(gameOver=='true'){  //to limit at the boundries
        clearInterval(id);
        pen.fillStyle="black"
        pen.font="40px sans-sarif"
        pen.fillText("Game Over!!",100,100)
        return;
    }
    pen.fillStyle="brown"  //to provide colour to snake
    pen.clearRect(0,0,1000,600) //todelete the canvas before the creation of new rectangle so that we can see the moving snake
    for(let a of snakecell){
        pen.fillRect(a[0],a[1],cell,cell)  //snake body of rectangle shape a[0],a[1] ->initial point of snake 50,50->size of snake
    }
    pen.fillStyle="black"
    pen.font="40px sans-sarif"
    pen.fillText(`${score}`,50,50)
    pen.fillStyle='blue';
    pen.fillRect(randomCell[0],randomCell[1],cell,cell)
}

// draw()
function update(){
    let headX=snakecell[snakecell.length-1][0]
    let headY=snakecell[snakecell.length-1][1]
    let newX
    let newY
    if(direction=='right'){
        newX=headX+cell
        newY=headY
        if(newX==1000){
            gameOver='true'
        }
    }else if(direction=='left'){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver='true'
        }
    }else if(direction=='up'){
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver='true'
        }
    }else{
        newX=headX
        newY=headY+cell
        if(newY==600){
            gameOver='true'
        }
    }
    snakecell.push([newX,newY])
    if(newX==randomCell[0]&&newY==randomCell[1]){
        randomCell=generateR()
        score++
    }else{
        snakecell.shift(); //to shift the rect
    }
    
} 
function generateR(){
    return[
        Math.floor(Math.random()*950/cell)*cell,
        Math.floor(Math.random()*550/cell)*cell
    ]
}


