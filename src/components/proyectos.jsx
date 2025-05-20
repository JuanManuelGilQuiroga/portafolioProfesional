import { Proyecto } from './proyecto.jsx'
import campusShop from '../assets/campusStore.png'
import SpaceHunters from '../assets/SpaceHunters.png'
import cineCampus from '../assets/cineCampus.webp'
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
            tecnologias:["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
            link: "https://hubux-hunters.vercel.app/",
        },
        {
            titulo:"Ruraq Maki",
            imagen: cineCampus,
            descripcion: "E-commerce completamente funcional, backend desarrollado con Node.js, Express, y MongoDB usando arquitectura Hexagonal, integrando autenticación segura mediante OAuth con Google, Discord, y GitHub.",
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
        }
    ]

    return (
        <>
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
        <section id="proyectos" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-950">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Proyectos</h2>
                <div className="grid md:grid-cols-2 gap-8">
                {/* Project Card 1 */}
                <div className="bg-black/40 border border-zinc-800 hover:border-red-500/30 transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="h-64 bg-zinc-800"></div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Space-Hunters</h3>
                    <p className="text-amber-50/70 mb-4">
                        Creación de API para consumir MongoDB con node.js y express.js usando MVC, el consumo de la misma
                        está creado con ayuda de React y Tailwind.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#61DAFB]/10 text-[#61DAFB] rounded-full px-3 py-1">React</span>
                        <span className="bg-[#06B6D4]/10 text-[#06B6D4] rounded-full px-3 py-1">Tailwind</span>
                        <span className="bg-[#339933]/10 text-[#339933] rounded-full px-3 py-1">Node.js</span>
                        <span className="bg-zinc-700/50 text-zinc-300 rounded-full px-3 py-1">Express.js</span>
                        <span className="bg-[#47A248]/10 text-[#47A248] rounded-full px-3 py-1">MongoDB</span>
                    </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="bg-black/40 border border-zinc-800 hover:border-red-500/30 transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="h-64 bg-zinc-800"></div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Ruraq Maki</h3>
                    <p className="text-amber-50/70 mb-4">
                        E-commerce completamente funcional, backend desarrollado con Node.js, Express, y MongoDB usando
                        arquitectura Hexagonal, integración segura mediante OAuth con Google, Discord, y GitHub.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#61DAFB]/10 text-[#61DAFB] rounded-full px-3 py-1">React</span>
                        <span className="bg-[#06B6D4]/10 text-[#06B6D4] rounded-full px-3 py-1">Tailwind</span>
                        <span className="bg-[#339933]/10 text-[#339933] rounded-full px-3 py-1">Node.js</span>
                        <span className="bg-zinc-700/50 text-zinc-300 rounded-full px-3 py-1">Express.js</span>
                        <span className="bg-[#47A248]/10 text-[#47A248] rounded-full px-3 py-1">MongoDB</span>
                    </div>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="bg-black/40 border border-zinc-800 hover:border-red-500/30 transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="h-64 bg-zinc-800"></div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">CineCampus</h3>
                    <p className="text-amber-50/70 mb-4">
                        Creación de API para consumir MongoDB con node.js y express.js usando MVC, el consumo de la misma
                        está creado con ayuda de React y Tailwind.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#61DAFB]/10 text-[#61DAFB] rounded-full px-3 py-1">React</span>
                        <span className="bg-[#06B6D4]/10 text-[#06B6D4] rounded-full px-3 py-1">Tailwind</span>
                        <span className="bg-[#339933]/10 text-[#339933] rounded-full px-3 py-1">Node.js</span>
                        <span className="bg-zinc-700/50 text-zinc-300 rounded-full px-3 py-1">Express.js</span>
                        <span className="bg-[#47A248]/10 text-[#47A248] rounded-full px-3 py-1">MongoDB</span>
                    </div>
                    </div>
                </div>

                {/* Project Card 4 */}
                <div className="bg-black/40 border border-zinc-800 hover:border-red-500/30 transition-all duration-300 rounded-lg overflow-hidden">
                    <div className="h-64 bg-zinc-800"></div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">CampusShop</h3>
                    <p className="text-amber-50/70 mb-4">
                        FrontEnd de un e-commerce de ropa usando POO y Lit como Framework.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-[#324FFF]/10 text-[#324FFF] rounded-full px-3 py-1">Lit</span>
                        <span className="bg-[#F7DF1E]/10 text-[#F7DF1E] rounded-full px-3 py-1">JavaScript</span>
                        <span className="bg-[#339933]/10 text-[#339933] rounded-full px-3 py-1">Node.js</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}