import React, { useState } from 'react';
import { motion } from 'framer-motion'

export function Inicio () {
    const [buttonText, setButtonText] = useState('juanmanuelgilquiroga@gmail.com');

    const handleCopyClick = () => {
        setButtonText('Copiado!');
        setTimeout(() => {
        setButtonText('juanmanuelgilquiroga@gmail.com');
        }, 2000);
    };


    return (
        <main className="h-[90vh] flex flex-col justify-center gap-6 items-center mt-[-4vh]" id="inicio">
            <motion.h1 animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: .5}} className="text-center text-8xl font-bold">Juan Manuel Gil Quiroga<span className="text-custom-red font-bold">.</span></motion.h1>
            <motion.p animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: .75}} className="text-center text-4xl">Web <span className="text-custom-red font-bold">Developer</span></motion.p>
            <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1, delay: 1}} className="flex justify-center items-center gap-6 w-full h-[10%]">
                <motion.div whileHover={{ backgroundColor: '#BF1516', transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} className="rounded-3xl bg-transparent cursor-pointer flex justify-center items-center border-[0.2rem] border-custom-red w-[15%] h-full" href="../assets/hojaDeVidaJuanManuelGilQuiroga.pdf" download="hojaDeVidaJuanManuelGilQuiroga"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48z"/></svg><a className="border-l-2 px-3 my-2 ml-3">CV</a></motion.div>
                <motion.div onClick={handleCopyClick} whileHover={{ backgroundColor: '#BF1516', transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }} className="rounded-3xl flex bg-transparent cursor-pointer justify-center items-center border-[0.2rem] border-custom-red w-[35%] h-full" ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg><a id="correo" className="border-l-2 px-3 my-2 ml-3">{buttonText}</a></motion.div>
            </motion.div>
        </main>
    )
}