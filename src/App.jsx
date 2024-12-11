import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Components/Test'
import Event from './Components/Event'
import List from './Components/List'
import DynamicList from './Components/DynmicList'
import Control from './Components/Contorl'
import UnControll from './Components/UnControll'
import ValidationForm from './Components/Validation/ValidationForm';
import HOC from './Components/HOC'

const HocComp = HOC(ValidationForm)
const HocTest = HOC(Test)

function App() {
  const [list, setList] = useState(["Home", "profile","About", "Contact", "Service"]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoading(true);
    }, 5000);
    
  }, [])

  return (
      <React.Fragment>
        {/* <h1>Hello</h1> */}
        {/* <Test name='Red & White' /> */}
        {/* <Event /> */}
        {/* <List list={list} /> */}
        {/* <DynamicList list={list} /> */}
        {/* <Control /> */}
        {/* <UnControll /> */}
    <HocTest isLoading={isLoading} />
        {/* <HocComp isLoading={isLoading} user={"Hello"}  /> */}
      </React.Fragment>
      
  )
}

export default App
