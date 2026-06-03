import React from 'react'
import '../App.css'
import { useState } from 'react'


const Page = () => {
  let [input,setInput]=useState("")
  let [todos,setTodos]=useState([])

  function d(id){
    let updatedData=todos.filter((a,b)=>{
      return id!=b
    })
    setTodos(updatedData)
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" placeholder='Enter a text...' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>setTodos([...todos,input])}>ADD</button>
      {
        todos.map((a)=>{
          return (<div>
            <h3>{a}</h3>
            <button onClick={()=>d(input)}>Delete</button>
          </div>)
        })
      }
    </div>
  )
}

export default Page
