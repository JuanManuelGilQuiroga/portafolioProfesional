import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { Mail } from "lucide-react"

export function Inicio () {
    const [buttonText, setButtonText] = useState('juanmanuelgilquiroga@gmail.com');

    const handleCopyClick = () => {
        navigator.clipboard.writeText('juanmanuelgilquiroga@gmail.com');
        setButtonText('Copiado!');
        setTimeout(() => {
        setButtonText('juanmanuelgilquiroga@gmail.com');
        }, 2000);
    };


    return (
        <main className="h-[90vh] flex flex-col justify-center gap-6 items-center mt-10" id="inicio">
            <motion.h1 animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: .5}} className="text-center text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">Juan Manuel Gil Quiroga<span className="text-custom-red font-bold">.</span></motion.h1>
            <motion.p animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: .75}} className="text-center text-2xl md:text-3xl lg:text-4xl mb-8">Web <span className="text-custom-red font-bold">Developer</span></motion.p>
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: 1}} className="flex justify-center items-center gap-6 w-full">
                <motion.div onClick={handleCopyClick} whileHover={{ backgroundColor: '#BF1516', transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} className="rounded-3xl cursor-pointer bg-transparent flex justify-center items-center border-[0.2rem] border-custom-red md:w-[40vw] h-[10vh]" ><Mail className="ml-4 h-5 w-5"/><a id="correo" className="border-l-2 px-3 my-2 ml-3">{buttonText}</a></motion.div>
            </motion.div>
        </main>
    )
}