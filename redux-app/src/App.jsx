import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
