import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import List from "./screens/List/List";
import About from "./screens/About/About";
import User from "./screens/User/User";
import Navbar from "./utilities/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
