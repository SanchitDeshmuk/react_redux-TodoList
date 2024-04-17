import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function Todo() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
       <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
       <button onClick={addTodoHandler}>Submit</button>
    </div>
  )
}

export default Todo