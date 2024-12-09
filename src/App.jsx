import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Components/Test'
import Event from './Components/Event'
import List from './Components/List'
import DynamicList from './Components/DynmicList'
import Control from './Components/Contorl'
import UnControll from './Components/UnControll'
import ValidationForm from './Components/Validation/ValidationForm'

function App() {
  const [list, setList] = useState(["Home", "profile","About", "Contact", "Service"])

  return (
      <React.Fragment>
        {/* <h1>Hello</h1> */}
        {/* <Test name='Red & White' /> */}
        {/* <Event /> */}
        {/* <List list={list} /> */}
        {/* <DynamicList list={list} /> */}
        {/* <Control /> */}
        {/* <UnControll /> */}
        <ValidationForm />
      </React.Fragment>
      
  )
}

export default App
