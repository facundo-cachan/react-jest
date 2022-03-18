import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <img
          src="/logo.svg"
          className="App-logo"
          alt="logo"
          height={50}
          width={100}
        />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
