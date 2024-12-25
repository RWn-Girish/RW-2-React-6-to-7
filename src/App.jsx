import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Components/Test";
import Event from "./Components/Event";
import List from "./Components/List";
import DynamicList from "./Components/DynmicList";
import Control from "./Components/Contorl";
import UnControll from "./Components/UnControll";
import ValidationForm from "./Components/Validation/ValidationForm";
import HOC from "./Components/HOC";
import { Link, Route, Routes } from "react-router";

const HocComp = HOC(ValidationForm);
const HocTest = HOC(Test);

function App() {
  const [list, setList] = useState([
    "Home",
    "profile",
    "About",
    "Contact",
    "Service",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <div>
        <h2>Header....</h2>
        <Link to={"/"}>Home</Link> ||
        <Link to={"/about"}>About</Link> ||
        <Link to={"/contact"}>Contact</Link> ||
      </div>
      <Routes>
        <Route path="/" element={<Test name='Red & White' />} />
        <Route path="/about" element={<UnControll />} />
        <Route path="/contact" element={<Control />} />
        <Route path="/*" element={<h2>Not Found</h2>} />
      </Routes>
      <div>
        <h2>Footer....</h2>
      </div>
      {/* <h1>Hello</h1> */}
      {/* <Test name='Red & White' /> */}
      {/* <Event /> */}
      {/* <List list={list} /> */}
      {/* <DynamicList list={list} /> */}
      {/* <Control /> */}
      {/* <UnControll /> */}
      {/* <HocTest isLoading={isLoading} /> */}
      {/* <HocComp isLoading={isLoading} user={"Hello"}  /> */}
    </React.Fragment>
  );
}

export default App;
