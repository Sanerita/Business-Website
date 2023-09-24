import React from 'react'
import './styles.css'
// import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.jsx'


const App = () => {
  

  return (
    <div>
      
      <navbar />
    

      <HomePage/>
      <Shop/>
      <AboutPage/>
      <ContactPage/>
      
    </div>
  )
}

export default App;
