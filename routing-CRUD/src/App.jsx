
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componets/Home'
import AddEmp from './Componets/AddEmp'
import Header from './Componets/Header'
import EditEmp from './Componets/EditEmp'
import UseCallback from './Componets/UseCallback/UseCallback'
import CompA from './Componets/UseContex/CompA'
import { createContext } from 'react'

export const UserContex = createContext(null)

function App() {
  const user = {
    name: "Girish Gondaliya",
    course: "MERN stack Developer"
  }

  return (
    <>
    <Header />
    <UserContex.Provider value={user} >
      <Routes>
        <Route path='/' element={<CompA />} />
        <Route path='/useCallback' element={<UseCallback />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<AddEmp />} />
        <Route path='/edit/:id' element={<EditEmp />} />
      </Routes>
      </UserContex.Provider>
    </>
  )
}

export default App
