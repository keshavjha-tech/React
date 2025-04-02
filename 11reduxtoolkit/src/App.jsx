import React from 'react'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

function App() {
  return (
    <div>
    <AddTodo  className='flex items-center justify-center'/>
    <Todo />
    </div>
  )
}

export default App