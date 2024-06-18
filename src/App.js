import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

// Import Components
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
