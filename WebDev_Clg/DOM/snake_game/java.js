let canvas=document.querySelector("canvas")
let pen=canvas.getContext("2d")  //selects which type of canvas we want
let snakecell=[[0,0]]
let cell=50
let direction='right'
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
    pen.fillStyle="brown"  //to provide colour to snake
    pen.clearRect(0,0,1000,800) //todelete the canvas before the creation of new rectangle so that we can see the moving snake
    for(let a of snakecell){
        pen.fillRect(a[0],a[1],cell,cell)  //snake body of rectangle shape a[0],a[1] ->initial point of snake 50,50->size of snake
    }
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
    }else if(direction=='left'){
        newX=headX-cell
        newY=headY
    }else if(direction=='up'){
        newX=headX
        newY=headY-cell
    }else{
        newX=headX
        newY=headY+cell
    }
    snakecell.push([newX,newY])
    snakecell.shift(); //to shift the rect
} 

setInterval(()=>{
    draw();
    update()
},200)
