import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { completeTodoAction, deleteTodoAction } from '../store/todo/actions'


function MainPage() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todo.todoList)
  const completed = useSelector((state) => state.todo.completedList)
  const RemoveTodo = ({id, method}) => {
    dispatch(deleteTodoAction({id, method}))
  }

  const CompleteTodo = (todo) =>{
    dispatch(completeTodoAction(todo))
  }

  return (
    <div className='div_list'>
      <div className="isnot">
      <h1 id='header'>Todos:</h1>
      {todos.map(todo => (
        <div className="todo">
            <h1>{todo.task}</h1>
            <div className="buttons">
              <button onClick={() => RemoveTodo({id : todo.id, method : "NotCompleted"})}>Delete</button>
              <button onClick={() => CompleteTodo(todo)}>Done</button>
            </div>
        </div>
        
      )) }
      <Link id='link' to={'/create'}>Create</Link>
      </div>
        <div className="iscompleted">
          <h1 id='header'>completed : </h1>
          {completed?.map((item) => (
            <div className="todo">
              <h1>{item.task}</h1>
              <div className="buttons">
              <button onClick={() => RemoveTodo({id : item.id, method : "Completed"})}>Delete</button>
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MainPage