import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

// Style
import './css/main.css';

// Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Page404 from "./pages/Page404";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Logement />} path="/fiche-logement" />
          <Route element={<Page404 />} path="*" />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
