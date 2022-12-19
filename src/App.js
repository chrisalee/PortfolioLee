import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Project from "./screens/Project";

function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/portfolio/:id" element={<Project />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
        <ScrollTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
