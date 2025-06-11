import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormTodo from './FormTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <FormTodo/>
 
  </>
  )
}

export default App
