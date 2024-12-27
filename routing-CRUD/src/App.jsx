
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componets/Home'
import AddEmp from './Componets/AddEmp'
import Header from './Componets/Header'

function App() {
  

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddEmp />} />
      </Routes>
    </>
  )
}

export default App
