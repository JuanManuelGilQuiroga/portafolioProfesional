import { motion } from 'framer-motion'

export function Header({toggleMobileMenu, mobileMenuOpen}) {
    return (
        <>
        <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md py-3'>
            <div className='mx-auto px-4 md:px-8 flex items-center relative'>
                <a href="#inicio" className="absolute top-5 md:top-8 left-5 md:left-20 text-xl font-bold text-amber-50">
                    JMG<span className="text-red-500">.</span>
                </a>
                <motion.nav animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className="hidden md:flex justify-between px-[25vw] w-[100vw] h-[10vh] items-center space-x-8">
                    <a href="#inicio">Inicio</a>
                    <a href="#acercaDeMi">Acerca de mi</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#habilidades">Habilidades</a>
                    <a href="#objetivos">Valores y Objetivos</a>
                </motion.nav>
                <button className="md:hidden absolute top-0 right-5 text-xl font-bold text-amber-50 z-50" onClick={toggleMobileMenu} aria-label="Abrir menú">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    {mobileMenuOpen ? (
                        <>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </>
                    ) : (
                        <>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                        </>
                    )}
                    </svg>
                </button>
            </div>
        </header>
        </>
    )
}