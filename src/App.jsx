import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Cart } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
