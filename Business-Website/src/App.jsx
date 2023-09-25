import React from 'react'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar.jsx'


const App = () => {
  

  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    

      {/* <HomePage/>
      <Shop/>
      <AboutPage/>
      <ContactPage/> */}
      
    </div>
  )
}

export default App;
