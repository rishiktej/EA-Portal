import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './Components/login'
import Hero from './components/Hero'
function App() {
  const [count, setCount] = useState(0)

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Register"; // Assuming SignupForm is the Register component
import Login from "./components/Login";
import Eventcreation from "./components/EventRegistration"; // Create or import your Login component

const App = () => {
  return (
    <>
      {/*<Register/>*/}
      {/*<Login/>*/}
      <Hero/>
    </>
  )
}
    <Router>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/Eventcreation" element={<Eventcreation />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
