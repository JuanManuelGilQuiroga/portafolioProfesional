import fotoPerfil from '../assets/fotoPerfil.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function AcercaDeMi () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            {/*<motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className="py-20 px-4 md:px-8 lg:px-16" id='acercaDeMi'>
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
            </motion.div>*/}

            <motion.section ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }}  id="acercaDeMi" className="py-20 px-4 md:px-8 lg:px-16">
                <motion.div className="max-w-5xl mx-auto">
                    <motion.h2 animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5}} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Acerca de mí</motion.h2>
                    <motion.div animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5, delay: .5}} className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
                    <motion.div className="mx-auto md:mx-0">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-red-500/20">
                        <div className="absolute inset-0 bg-zinc-800"></div>
                        <img src={fotoPerfil} alt="" className="absolute inset-0 object-cover w-full h-full"/>
                        </div>
                    </motion.div>
                    <motion.div className="space-y-6 text-lg px-12 md:px-0">
                        <p className="leading-relaxed">
                        Me encanta crear sitios web que brinden una experiencia de usuario única y satisfactoria. Con el
                        conjunto de mis habilidades, tengo la capacidad de desarrollar un sitio web completo, desde la
                        creación de la API hasta el consumo de la misma, asegurando una integración fluida y funcional.
                        </p>
                        <p className="leading-relaxed">
                        Soy una persona autodidacta, resiliente y comprometida con mi trabajo. Mi enfoque en la mejora
                        continua me impulsa a aprender y adaptarme a nuevas tecnologías y tendencias. Este entusiasmo por el
                        crecimiento personal y profesional me permite aplicar lo aprendido para superar desafíos y ofrecer
                        soluciones innovadoras en cada proyecto.
                        </p>
                        <p className="leading-relaxed">
                        Estoy comprometido con el desarrollo de soluciones efectivas que no solo cumplan con los requisitos,
                        sino que también superen las expectativas de mis clientes.
                        </p>
                    </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}