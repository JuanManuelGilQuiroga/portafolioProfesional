import { motion } from 'framer-motion'

export function Habilidad ({tecnologias, isInView}) {
    return (
        <>
            {tecnologias.map((tec, index) => {
                return (
                    <motion.div animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: 1, delay: index*.15}} whileHover={{ backgroundColor: '#1E1E1E', scale: 1.1, transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} key={index} className="flex items-center bg-custom-black-secondary rounded-md px-4 py-2 gap-2">
                        <img src={tec.icon} alt="" />
                        <h3 className="text-[1.2rem] font-semibold">{tec.nombre}</h3>
                    </motion.div>        
                )
            })}
        </>
    )
}