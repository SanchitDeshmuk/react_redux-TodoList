import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function ShowTodo() {

    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()

  return (
    <div>
        {todos.map((todo)=>(
            <h3 key={todo.id}>{todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            </h3>
        ))}
    </div>
  )
}

export default ShowTodo