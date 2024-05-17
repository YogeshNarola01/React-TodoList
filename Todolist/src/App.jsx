import { useState } from 'react'
import Todo from './Todo'
import './todo.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
    </>
  )
}

export default App
