import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import ContactMe from './components/ContactMe/ContactMe'
import { WorkExperience } from './components/WorkExperience/WorkExperience'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Hero />
      <Skills />
      <WorkExperience />
      <ContactMe />
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App
