import { useState, createContext } from 'react'
import './App.css'
import FormTodo from './FormTodo'
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom"
import Login from './login'
import SignUp from './Signup'
import Testing from './Testing'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'
export const TaskContext = createContext();
function App() {


  return (
    <>
    <TaskContext>
    <FirstChild />
    <SecondChild/>
    </TaskContext>
 
      {/* <BrowserRouter>

        <Routes>
          <Route path="/" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
          <Route path="/FormTodo" element={<FormTodo />} />
          {/* <Route path='/testing' element={<Testing/>} /> */}
        {/* </Routes>
          
      </BrowserRouter> */} 
    </>
  )
}

export default App
