import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section className='home-section'>
      <div className='intro-card'>
        <img src='your-profile-pic.jpg' alt='Profile' className='profile-pic' />
        <div className='intro-text'>
          <h2>John Doe</h2>
          <p>
            Software Developer with a passion for creating amazing web
            applications.
          </p>
        </div>
      </div>
      <div className='about'>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit justo ut mi volutpat, a facilisis nisl sodales.
        </p>
      </div>
    </section>
  )
}

export default Home
