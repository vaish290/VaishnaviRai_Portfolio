import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import TechStack from '../components/TechStack.jsx'
import Experience from '../components/Experience.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Contact  from '../components/Contact.jsx'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience /> 
      <ProjectCard  />
      <Contact /> 
      
    </>
  )
}

export default Home
