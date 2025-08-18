
import './App.css'
import FormTodo from './FormTodo'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'



function App() {
 
  
  return (
    <>
 
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<SignUp />} />
            <Route path="/Login" element={<Login/>} />
          <Route path="/FormTodo" element={<FormTodo />} />
            
       </Routes>
          
      </BrowserRouter> 
    </>
  )
}

export default App
