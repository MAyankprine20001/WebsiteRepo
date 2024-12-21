import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Routes from './routes'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className='App'>
      <React.StrictMode>
        <Router>
          <Routes />
        </Router>
      </React.StrictMode>
    </div>
  )
}

export default App
