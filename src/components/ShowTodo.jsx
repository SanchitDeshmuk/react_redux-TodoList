import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import style from './showTodoStyle.module.css'

function ShowTodo() {

    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()

  return (
    <div className={`${style.container}`}>
        {todos.map((todo)=>(
            <h3 key={todo.id}>{todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
            </h3>
        ))}
    </div>
  )
}

export default ShowTodo