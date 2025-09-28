import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app">
          <header>
            <h1>🎬 Movie Search App</h1>
            <nav>
              <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
