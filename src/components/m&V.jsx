import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function MisionYVision () {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <motion.div ref={ref} animate={{ opacity: isInView ? 1 : 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.8, delay: .3 }} className="py-20 px-4 md:px-8 lg:px-16" id="objetivos">
            <div className='max-w-5xl mx-auto'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">Valores y Objetivos</h2>
                <div className='grid md:grid-cols-2 gap-12'>
                    <div className="bg-black/50 p-8 rounded-xl border border-red-500/10">
                        <h2 className="text-2xl font-bold mb-6 text-center">Misión</h2>
                        <p className="text-center leading-relaxed">Desarrollar soluciones de alta calidad para empresas nacionales que buscan liderar la innovación en el sector tecnológico, promoviendo un ambiente colaborativo que maximice el impacto de cada proyecto y contribuya al crecimiento sostenible de nuestros clientes.</p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-xl border border-red-500/10">
                        <h2 className="text-2xl font-bold mb-6 text-center">Visión</h2>
                        <p className="text-center leading-relaxed">Quiero impactar en el desarrollo de soluciones que impulsen la innovación y eficiencia en empresas nacionales, trabajando con líderes tecnológicos que valoren la excelencia. Incorporaré tecnologías emergentes para que mis clientes, sin importar su tamaño o sector, siempre estén un paso adelante, convirtiéndome en un socio estratégico clave.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}