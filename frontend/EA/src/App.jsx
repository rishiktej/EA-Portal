import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Register"; // Assuming SignupForm is the Register component
import Login from "./components/Login"; // Create or import your Login component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;