import { motion } from 'framer-motion'

export function Header() {
    return (
        <motion.nav animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className="relative flex flex-row items-center justify-between px-[25vw] w-[100vw] h-[10vh] fixed z-50 backdrop-blur-md">
            <a href="#inicio" className="absolute top-5 left-5 text-xl font-bold text-amber-50">
                JMG<span className="text-red-500">.</span>
            </a>
            <a href="#inicio">Inicio</a>
            <a href="#acercaDeMi">Acerca de mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#objetivos">Valores y Objetivos</a>
        </motion.nav>
    )
}