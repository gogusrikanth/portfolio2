import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <section className="home-section">
      <div className="intro-card">
        <img src="/image.jpg" alt="Profile" className="profile-pic" />
        <div className="intro-text">
          <h2>srikanth</h2>
          <p>Aspiring Software Developer | Computer Science Student</p>
        </div>
      </div>
      <div className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm Gogu Srikanth, a dedicated and self-motivated software
          developer currently pursuing a Bachelor's degree in Computer Science.
          I am actively seeking an internship where I can apply my skills and
          learn new ones in a dynamic environment.<br></br><br></br>
          People often describe me as an upbeat team player with excellent
          communication skills. I thrive in collaborative settings and believe
          that effective teamwork is key to successful projects. My dedication
          and curiosity drive me to constantly experiment with new ideas and
          enhance my technical proficiency.<br></br><br></br>
          Coming from a family of four, I have learned the importance of
          responsibility and commitment. I enjoy reading, and the knowledge and
          perspectives I gain from it have significantly strengthened my
          teaching skills and presentation abilities.<br></br><br></br>I am always eager
          to embrace new challenges and opportunities for growth. My passion for
          continuous learning and self-awareness helps me adapt quickly and
          contribute effectively to any team. Feel free to explore my portfolio
          to see some of the projects I've worked on and reach out if you'd like
          to connect or collaborate.
        </p>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </div>
    </section>
  )
}

export default Home
