import React from "react";
import Form from "./components/Form";
import Success from "./components/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
