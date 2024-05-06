import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import './sass/home.scss';
import './sass/base/base.scss';
import Slug from "./posts/Default.tsx";
import Login from "./Login";
import Notesmain from "./Notesmain";
import Postsmain from "./Postsmain";
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
          <Route path="/login" element={ <Login /> } />
          <Route path="/notesmain" element={ <Notesmain /> } />
          <Route path="/postsmain" element={ <Postsmain /> } />
          {/* <Route path="/notes/:slug" element={ <Noteslug /> } /> */}
      </Routes>
      <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
