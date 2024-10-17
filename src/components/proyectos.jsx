import { Proyecto } from './proyecto.jsx'
import campusShop from '../assets/campusStore.png'
import foodLover from '../assets/foodLover.webp'
import virtualWallet from '../assets/virtualWallet.png'
import cineCampus from '../assets/cineCampus.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function Proyectos () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const proyectos = [
        {
            titulo:"Ruraq Maki",
            imagen: cineCampus,
            descripcion: "Creacion de API para consumir MongoDB con node.js y express.js usando MVC, el consumo de la misma esta creado con ayuda de React y Tailwind.",
            tecnologias:["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
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
        },
        {
            titulo:"FoodLover",
            imagen: foodLover,
            descripcion: "Creacion de una landing page acerca de comida, con diferentes secciones.",
            tecnologias:["HTML", "CSS"],
            link: "https://github.com/JuanManuelGilQuiroga/foodLover",
        },
        {
            titulo:"Virtual Wallet",
            imagen: virtualWallet,
            descripcion: "Creación del frontEnd para una billetera virtual.",
            tecnologias:["HTML", "CSS"],
            link: "https://github.com/JuanManuelGilQuiroga/foodLover",
        },
    ]

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className='flex flex-col justify-between items-center' id='proyectos'>
            <motion.h2 animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5}} className="text-center text-4xl font-bold">Proyectos</motion.h2>
            <div className='flex flex-row flex-wrap justify-around gap-6 h-auto w-[70%] mt-[10vh]'>
                {proyectos.map((proyecto, index) => {
                    return (<Proyecto key={index} isInView={isInView} posicion={index} titulo={proyecto.titulo} imagen={proyecto.imagen} descripcion={proyecto.descripcion} tecnologias={proyecto.tecnologias} link={proyecto.link}/>)
                })}
            </div>
        </motion.div>
    )
}