import { motion } from 'framer-motion'

export function Header() {
    return (
        <motion.nav animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className="flex flex-row items-center justify-between w-[50vw] h-[15vh]">
            <a href="#inicio">Inicio</a>
            <a href="#acercaDeMi">Acerca de mi</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#objetivos">Valores y Objetivos</a>
        </motion.nav>
    )
}