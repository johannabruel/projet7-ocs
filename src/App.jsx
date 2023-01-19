import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

// Style
import './css/main.css';

// Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route 
            exact path="/logements/:logementId" 
            element={<Logement />} 
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
