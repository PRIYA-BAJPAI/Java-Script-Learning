 import React, { useState } from 'react'
//  import 'App.css'

import Form from './Form'
import Navbar from './Components/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Task from './Components/Task'
import UseReducer from '../UseReducer'

//  const App = () => {
//   let[count,setCount]=useState(0)
//   let[color,SetColor]=useState("aquamarine")
//   function func1(){
//     setCount(count+1)
//   }
//   function func2(){
//     setCount(0)
//   }
//   function func3(){
//     setCount(count-1)
//   }
  

//   function changecol(){
//     if(color ===  'aquamarine'){
//       SetColor("darkslategrey")
//     }else{
//       SetColor("aquamarine")
//     }
     
//   }
//    return (
//      <div className='class' style={{backgroundColor:color}}>
//         <h1>{count}</h1>   {/*curly braces are used to set the value of that variable to the screen*/}
//         <div>
//           <button onClick={func3}>Decrease</button>
//           <button onClick={func2}>Reset</button>
//           <button onClick={func1}>Increase</button>
//           <button onClick={changecol}>bg-change</button>
          
          
//         </div>
//         <Hello/>
//      </div>
//    )
//  }
 
//  export default App



// //2nd component

 
//  const Hello = () => {
//    return (
//      <div>
//        <h2>Hello</h2>
//      </div>
//    )
//  }
 


const App = () => {
  return (
    <div>
      
      {/*<Form/>*/}
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/task' element={<Task/>} />
      </Routes> */}
      <UseReducer/>
      
    </div>
  )
}

export default App

 
 