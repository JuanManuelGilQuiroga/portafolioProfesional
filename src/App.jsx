import { AcercaDeMi } from './components/acercaDeMi.jsx'
import { Header } from './components/header.jsx'
import { Inicio } from './components/inicio.jsx'
import { Proyectos } from './components/proyectos.jsx'
import { Habilidades } from './components/habilidades.jsx'
import { MisionYVision } from './components/m&V.jsx'
import { Footer } from './components/footer.jsx'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react"

function App() {
  const ref = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Header toggleMobileMenu={toggleMobileMenu} mobileMenuOpen={mobileMenuOpen}/>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            <a
              href="#inicio"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Inicio
            </a>
            <a
              href="#acercaDeMi"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Acerca de mí
            </a>
            <a
              href="#proyectos"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Proyectos
            </a>
            <a
              href="#habilidades"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Habilidades
            </a>
            <a
              href="#objetivos"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Valores y Objetivos
            </a>
            <a
              href="#contacto"
              className="text-2xl text-amber-50/80 hover:text-amber-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contacto
            </a>
          </nav>
          <div className="mt-12 flex gap-6">
            <a href="https://github.com/JuanManuelGilQuiroga" className="text-amber-50/60 hover:text-amber-50 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="" className="text-amber-50/60 hover:text-amber-50 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
      <Inicio />
      <AcercaDeMi />
      <Proyectos/>
      <Habilidades />
      <MisionYVision />
      <Footer />
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className='bottom-0 left-[3vw] flex flex-col justify-between items-center fixed'>
        <a href="https://github.com/JuanManuelGilQuiroga"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
        <a href="https://www.linkedin.com/in/juan-manuel-gil-quiroga-a7a641313/"><svg className='mt-[1vh]' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a>
        <div className='h-[13vh] w-[3px] bg-custom-red mt-[4vh]'></div>
      </motion.div>
    </>
  )
}

export default App
