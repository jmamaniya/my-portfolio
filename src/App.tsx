import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import FloatingResumeButton from './components/shared/FloatingResumeButton'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications /> 
        <Experience />
        <Skills />     
        <Contact />
      </main>
      <Footer />
      <FloatingResumeButton />
    </div>
  )
}

export default App