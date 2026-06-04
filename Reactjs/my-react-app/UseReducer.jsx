import React, { useReducer } from 'react'

const UseReducer = () => {
    function reducer(count,action){
        if(action.type=="inc"){
            return count+1
        }else if(action.type=="dec"){
            return count-1
        }else if(action.type=="reset"){
            return 0
        }
        return count
    }
    let[count,disptach]=useReducer(reducer,0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>disptach({type:"inc"})}>INC</button>
      <button onClick={()=>disptach({type:"reset"})}>RESET</button>
      <button onClick={()=>disptach({type:"dec"})}>DEC</button>
    </div>
  )
}

export default UseReducer
