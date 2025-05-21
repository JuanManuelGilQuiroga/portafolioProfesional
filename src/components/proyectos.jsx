import { Proyecto } from './proyecto.jsx'
import campusShop from '../assets/campusStore.png'
import SpaceHunters from '../assets/SpaceHunters.png'
import cineCampus from '../assets/cineCampus.webp'
import RuraqMaki from '../assets/RuraqMaki.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function Proyectos () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const proyectos = [
        {
            titulo:"Space-Hunters",
            imagen: SpaceHunters,
            descripcion: "Creacion de API para consumir MongoDB con node.js y express.js usando MVC, el consumo de la misma esta creado con ayuda de React y Tailwind.",
            tecnologias:["React", "Tailwind", "Node.js", "Express.js", "Prisma", "MySQL", "PassPort"],
            link: "https://hubux-hunters.vercel.app/",
        },
        {
            titulo:"Ruraq Maki",
            imagen: RuraqMaki,
            descripcion: "E-commerce completamente funcional, backend desarrollado con Node.js, Express, y MongoDB usando arquitectura Hexagonal, integrando autenticación segura mediante OAuth con Google, Discord, y GitHub.",
            tecnologias:["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "PassPort"],
            link: "https://github.com/Andolon-M/Proyecto_Express",
        },
        {
            titulo:"CineCampus",
            imagen: cineCampus,
            descripcion: "Creacion de API para consumir MongoDB con node.js y express.js usando MVC, el consumo de la misma esta creado con ayuda de React y Tailwind.",
            tecnologias:["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
            link: "https://github.com/JuanManuelGilQuiroga/proyectoMongoII",
        },
        {
            titulo:"CampusShop",
            imagen: campusShop,
            descripcion: "FrontEnd de un e-commerce de ropa usando POO y lit como Framework.",
            tecnologias:["Lit", "JavaScript", "Node.js"],
            link: "https://github.com/JuanManuelGilQuiroga/proyectoWeb",
        }
    ]

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className='flex flex-col justify-between items-center py-20 px-4 md:px-8 lg:px-16' id='proyectos'>
            <div className="max-w-5xl mx-auto">
                <motion.h2 animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5}} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Proyectos</motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-12 md:px-0'>
                    {proyectos.map((proyecto, index) => {
                        return (<Proyecto key={index} isInView={isInView} posicion={index} titulo={proyecto.titulo} imagen={proyecto.imagen} descripcion={proyecto.descripcion} tecnologias={proyecto.tecnologias} link={proyecto.link}/>)
                    })}
                </div>
            </div>
        </motion.div>
    )
}