 import React, { useState } from 'react'
 
 const App = () => {
  let[count,setCount]=useState(0)
  let[color,SetColor]=useState("aquamarine")
  function func1(){
    setCount(count+1)
  }
  function func2(){
    setCount(0)
  }
  function func3(){
    setCount(count-1)
  }
  

  function changecol(){
    if(color ===  'aquamarine'){
      SetColor("darkslategrey")
    }else{
      SetColor("aquamarine")
    }
     
  }
   return (
     <div className='class' style={{backgroundColor:color}}>
        <h1>{count}</h1>   {/*curly braces are used to set the value of that variable to the screen*/}
        <div>
          <button onClick={func3}>Decrease</button>
          <button onClick={func2}>Reset</button>
          <button onClick={func1}>Increase</button>
          <button onClick={changecol}>bg-change</button>
          
          
        </div>
        <Hello/>
     </div>
   )
 }
 
 export default App



//2nd component

 
 const Hello = () => {
   return (
     <div>
       <h2>Hello</h2>
     </div>
   )
 }
 

 
 