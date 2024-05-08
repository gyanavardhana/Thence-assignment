import React from "react";
import Home from "./components/Homepage/Home"
import Form from "./components/Registerpage/Form/Form"
import Success from "./components/Successpage/Success"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/projects" element={<Form />} />
        <Route path="/success" element={<Success />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
