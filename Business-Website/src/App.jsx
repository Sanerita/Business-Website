import React from 'react'
import './styles.css'
// import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import HomePage from './components/HomePage'
import Shop from './components/Shop'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'


const App = () => {
  

  return (
    <div>
      
      
      <Navbar />
    
    

      <HomePage/>
      <Shop/>
      <AboutPage/>
      <ContactPage/>
      
    </div>
  )
}

export default App;
