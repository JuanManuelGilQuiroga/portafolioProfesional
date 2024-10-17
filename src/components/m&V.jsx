import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function MisionYVision () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className="flex flex-row items-start justify-around w-[70vw] h-[35vh] mt-[20vh]" id="objetivos">
            <div className="flex flex-col justify-between items-center w-[20vw] gap-6">
                <h2 className="text-[2rem] font-semibold">Misión</h2>
                <p className="font-medium text-center w-[70%]">Desarrollar soluciones de alta calidad para empresas nacionales que buscan liderar la innovación en el sector tecnológico, promoviendo un ambiente colaborativo que maximice el impacto de cada proyecto y contribuya al crecimiento sostenible de nuestros clientes.</p>
            </div>
            <div className="flex flex-col justify-between items-center w-[20vw] gap-6">
                <h2 className="text-[2rem] font-semibold">Visión</h2>
                <p className="font-medium text-center w-[70%]">Quiero impactar en el desarrollo de soluciones que impulsen la innovación y eficiencia en empresas nacionales, trabajando con líderes tecnológicos que valoren la excelencia. Incorporaré tecnologías emergentes para que mis clientes, sin importar su tamaño o sector, siempre estén un paso adelante, convirtiéndome en un socio estratégico clave.</p>
            </div>
        </motion.div>
    )
}