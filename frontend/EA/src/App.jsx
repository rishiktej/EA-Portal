import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Register"; // Assuming SignupForm is the Register component
import Login from "./components/Login";
import Eventcreation from "./components/EventRegistration"; // Create or import your Login component
import Admind from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/Eventcreation" element={<Eventcreation />} />
          <Route path="/" element={<Login />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admind />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
