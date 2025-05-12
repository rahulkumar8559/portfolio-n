
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Github from './components/Github'
import Gitstate from './components/Gitstate'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TechStack from './components/TechStack'

function App() {

  return (
    <div className='relative'>
        <Navbar />
        <Hero />
        <About />
        <TechStack/>
        <Skills />
        <Projects />
        <Github/>
        <Gitstate/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
