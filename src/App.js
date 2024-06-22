import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
