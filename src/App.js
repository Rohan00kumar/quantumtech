import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";

// Sample page components
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Simulation from "./pages/Simulation";
import Resource from "./pages/Resource";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;