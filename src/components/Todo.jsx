import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import style from './todoStyle.module.css'

function Todo() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div className={`${style.container}`}>
       <input type="text" onChange={(e)=>{setInput(e.target.value)}} className={`${style.inputDesign}`}/>
       <button onClick={addTodoHandler} className={`${style.buttonStyle}`}>Add Todo</button>
    </div>
  )
}

export default Todo