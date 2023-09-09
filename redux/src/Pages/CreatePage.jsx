import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../store/todo/actions'
import { Link, useNavigate } from 'react-router-dom'


function CreatePage() {
  const task = useRef()
  const dispatch = useDispatch()

  const submit = (e) => {
      e.preventDefault()
      const todo = {
        task : task.current.value,
        id : Math.floor(Math.random() * 10000000)
      }
      dispatch(addTodoAction(todo))

      task.current.value = ""
  }
  return (
    <form className='form' onSubmit={submit}>
      <Link id='link' to={'/'}>Main</Link>
        <h1>Enter task</h1>
        <input 
        type="text"
        placeholder='enter task'
        ref={task}
         />
    </form>
  )
}

export default CreatePage