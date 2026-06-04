import React from 'react'
import '../App.css'
import { useState } from 'react'


const Page = () => {
  let [input,setInput]=useState("")
  let [todos,setTodos]=useState([])
  let [task,setTask]=useState("")
  let data=localStorage.getItem("key")
  if(data){
    return JSON.parse(data)
  }
  

  function d(id){
    let updatedData=todos.filter((a,b)=>{
      return id!=b
    })
    setTodos(updatedData)
  }
  function edit(index){
    setTask(todos[index])
    SetInput(index)
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" placeholder='Enter a text...' onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>setTodos([...todos,input])}>ADD</button>
      {
        todos.map((a,idx)=>{
          return (<div>
            <h3>{a}</h3>
            <button onClick={()=>d(input)}>Delete</button>
            <button onClick={()=>edit(idx)}>Edit</button>
          </div>)
        })
      }
    </div>
  )
}

export default Page
