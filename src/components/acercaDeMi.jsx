import fotoPerfil from '../assets/fotoPerfil.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function AcercaDeMi () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className="h-[85vh] flex flex-col justify-between items-center" id='acercaDeMi'>
            <motion.h2 animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5}} className="text-center text-4xl font-bold">Acerca de mi</motion.h2>
            <motion.div animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5, delay: .5}} className="h-[80%] flex justify-center gap-20 w-[80%]">
                <div className='w-[450px] h-[450px] border rounded-full overflow-hidden'>
                    <img src={fotoPerfil} alt="" className="object-cover w-full h-full"/>
                </div>
                <div className='w-[50%] h-[100%] flex-col justify-evenly gap-24'>
                    <p className='w-[100%] font-medium text-[1.2rem]' >Me encanta crear sitios web que brinden una experiencia de usuario única y satisfactoria. Con el conjunto de mis habilidades, tengo la capacidad de desarrollar un sitio web completo, desde la creación de la API hasta el consumo de la misma, asegurando una integración fluida y funcional.</p>
                    <p className='w-[100%] font-medium mt-[5%] text-[1.2rem]'>Soy una persona autodidacta, resiliente y comprometida con mi trabajo. Mi enfoque en la mejora continua me impulsa a aprender y adaptarme a nuevas tecnologías y tendencias. Este entusiasmo por el crecimiento personal y profesional me permite aplicar lo aprendido para superar desafíos y ofrecer soluciones innovadoras en cada proyecto.</p>
                    <p className='w-[100%] font-medium mt-[5%] text-[1.2rem]'>Estoy comprometido con el desarrollo de soluciones efectivas que no solo cumplan con los requisitos, sino que también superen las expectativas de mis clientes.</p>
                </div>
            </motion.div>
        </motion.div>
    )
}