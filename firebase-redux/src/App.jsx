import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import Header from "./Components/Header";
import EditBook from "./Components/EditBook";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;
