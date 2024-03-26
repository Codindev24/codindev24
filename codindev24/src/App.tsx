import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import './sass/home.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
