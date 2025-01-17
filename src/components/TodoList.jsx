import React from 'react'
import Todo from './Todo'
import Edit from './Edit'
const TodoList = () => {
  return (
	<div className='bg-bg2 rounded-md flex flex-col justify-center'>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Edit />
  </div>
  )
}

export default TodoList