import { motion } from 'framer-motion'
import { useState } from 'react';
import { CodeIcon } from '../assets/codeIcon'

export function Proyecto ({titulo, imagen, descripcion, tecnologias, link, isInView, posicion}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5, delay: posicion*.5}} className="flex flex-col border border-zinc-800 hover:border-red-500/30 transition-all duration-300 rounded-lg overflow-hidden">
            <motion.div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='h-[50%] relative'>
                <div className='md:h-56 lg:h-72'>
                    <motion.img style={{ filter: isHovered ? "brightness(0.5)" : "brightness(1)" }} transition={{ duration: 0.3 }} src={imagen} alt="" className="h-full object-cover"/>
                </div>
                <motion.a href={link} style={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 1 }} className='w-[10%] h-[18%] bg-custom-cream absolute bottom-4 left-4 rounded-xl flex justify-center items-center'><CodeIcon style="h-[50%] text-custom-black"/></motion.a>
            </motion.div>
            <div className='p-6'>
                <div className="flex flex-col justify-between">
                    <h3 className="text-xl font-bold mb-4">{titulo}</h3>
                    <p className="font-medium mb-4">{descripcion}</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4">
                    {tecnologias.map(tec => {
                        return <div className="rounded-3xl bg-custom-red bg-opacity-50 px-2 gap-4"><span className="text-custom-red font-semibold">{tec}</span></div>
                    })}
                </div>
            </div>
        </motion.div>
    )
}