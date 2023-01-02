import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

// Style
import './css/main.css';

// Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/accueil" />
          <Route element={<About />} path="/about" />
          <Route element={<Page404 />} path="/error404" />
          <Route element={<Logement />} path="/fiche-logement" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
