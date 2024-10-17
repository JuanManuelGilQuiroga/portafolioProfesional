import expressIcon from '../assets/devicon--express.svg'
import gitIcon from '../assets/devicon--git.svg'
import jsIcon from '../assets/devicon--javascript.svg'
import nodeIcon from '../assets/devicon--nodejs.svg'
import reactIcon from '../assets/devicon--react.svg'
import mongoIcon from '../assets/skill-icons--mongodb.svg'
import cssIcon from '../assets/vscode-icons--file-type-css.svg'
import htmlIcon from '../assets/vscode-icons--file-type-html.svg'
import tailwindIcon from '../assets/vscode-icons--file-type-tailwind.svg'
import { Habilidad } from './habilidad.jsx'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function Habilidades () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const tecnologias = [
        {
            icon: htmlIcon,
            nombre: "HTML"
        },
        {
            icon: cssIcon,
            nombre: "CSS"
        },
        {
            icon: jsIcon,
            nombre: "JavaScript"
        },
        {
            icon: reactIcon,
            nombre: "React"
        },
        {
            icon: tailwindIcon,
            nombre: "Tailwind"
        },
        {
            icon: nodeIcon,
            nombre: "Node.js"
        },
        {
            icon: expressIcon,
            nombre: "Express.js"
        },
        {
            icon: mongoIcon,
            nombre: "MongoDB"
        },
        {
            icon: gitIcon,
            nombre: "Git"
        }
    ]

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3}} className="h-[35vh] flex flex-col justify-between items-center w-[70vw] mt-[10vh]" id='habilidades'>
            <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className="text-center text-4xl font-bold">Habilidades</motion.h2>
            <div className="flex flex-row justify-center items-center flex-wrap gap-6">
                <Habilidad tecnologias={tecnologias} isInView={isInView}/>
            </div>
        </motion.div>
    )
}