import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import './sass/home.scss';
import Slug from "./posts/Default.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={ <Slug /> } />
      </Routes>
      <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
