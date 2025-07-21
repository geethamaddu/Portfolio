import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import { Profile } from '../components/Profile'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen bg-background  text-foreground overflow-x-hidden'>

        {/* Theme toggle*/}
        <ThemeToggle/>
       
        {/* Background effects*/}
        <StarBackground/>

        {/* Navbar*/}
        <Navbar/>

        {/*Main content*/}

        <main>
          <Profile/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact />
        </main>

        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home