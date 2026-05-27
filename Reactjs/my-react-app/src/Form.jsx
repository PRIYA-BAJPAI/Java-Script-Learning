import React, { useState } from 'react'
import '../src/App.css'

const Form = () => {
    // let[input,SetInput]=useState("")
    // let[data,SetData]=useState("")
    // function func(e){
    //     SetInput(e.target.value)
    // }
    // function done(){
    //     SetData(input);
    //     SetInput("")
    // }

    let [input,SetInput]=useState({
        name:"",
        email:"",
        pass:""

    })
    function fun1(e){
        let {name,value}=e.target 
        SetInput({...input,[name]:value})
        console.log(input);
    }

  return (
    <div className='body'>
      {/* <h2>{data}</h2>
      <input type="text" name='input' value={input} onChange={func} />
      <button onClick={done}>Submit</button> */}
      <input type="text" name='name' value={input.name} onChange={fun1} placeholder='Enter your Name' />
      <input type="email" name='email' value={input.email} onChange={fun1} placeholder='Enter your Email' />
      <input type="password" name='pass' value={input.pass} onChange={fun1} placeholder='Enter your Password' />
      <button>Submit</button>
    </div>
  )
}

export default Form
