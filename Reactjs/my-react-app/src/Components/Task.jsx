import React from 'react'

const Task = () => {
    const getdata=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        console.log(response)
        const data=await response.json()
        console.log(data)
        
  }
  return (
    <div>
        <button onClick={getdata}>Click</button>
        {/* <h1>{data}</h1> */}
    </div>
  )
}

export default Task
