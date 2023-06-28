import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        {/* <Header /> */}
       
        <Routes>
          <Route path="/" element={<Home />} />
          
         
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
