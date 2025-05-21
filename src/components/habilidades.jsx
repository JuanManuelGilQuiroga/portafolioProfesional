import expressIcon from '../assets/devicon--express.svg'
import gitIcon from '../assets/devicon--git.svg'
import jsIcon from '../assets/devicon--javascript.svg'
import nodeIcon from '../assets/devicon--nodejs.svg'
import reactIcon from '../assets/devicon--react.svg'
import mysqlIcon from '../assets/devicon--mysql.svg'
import jestIcon from '../assets/devicon--jest.svg'
import prismaIcon from '../assets/devicon--prisma.svg'
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
            icon: jestIcon,
            nombre: "Jest"
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
            icon: mysqlIcon,
            nombre: "MySQL"
        },
        {
            icon: mongoIcon,
            nombre: "MongoDB"
        },
        {
            icon: prismaIcon,
            nombre: "Prisma"
        },
        {
            icon: gitIcon,
            nombre: "Git"
        }
    ]

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3}} className="py-20 px-4 md:px-8 lg:px-16" id='habilidades'>
            <div className='max-w-5xl mx-auto'>
                <motion.h2 animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: .5}} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Habilidades</motion.h2>
                <div className="flex flex-row justify-center items-center flex-wrap gap-6">
                    <Habilidad tecnologias={tecnologias} isInView={isInView}/>
                </div>
            </div>
        </motion.div>
    )
}