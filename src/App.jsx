import { useState } from 'react'
import Header from "./Components/Header"
import Inicio from './Components/Inicio'
import Projetos from './Components/Projetos'
import Sobre from './Components/Sobre'
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
