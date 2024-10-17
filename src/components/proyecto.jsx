import { motion } from 'framer-motion'

export function Proyecto ({titulo, imagen, descripcion, tecnologias, link, isInView, posicion}) {

    console.log(posicion)
    return (
        <motion.div animate={{opacity: isInView ? 1 : 0}} initial={{opacity: 0}} transition={{duration: .5, delay: posicion*.5}} className="flex flex-col gap-2 h-[60vh] w-[40%]">
            <img src={imagen} alt="" className="h-[50%] object-contain"/>
            <div className="flex flex-col justify-between">
                <h3 className="text-[1.2rem] font-semibold">{titulo}</h3>
                <p className="font-medium">{descripcion}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4">
                {tecnologias.map(tec => {
                    return <div className="rounded-3xl bg-custom-red bg-opacity-50 px-2 gap-4"><span className="text-custom-red font-semibold">{tec}</span></div>
                })}
            </div>
        </motion.div>
    )
}