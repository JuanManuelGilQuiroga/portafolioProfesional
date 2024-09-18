import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Footer() {
    const [buttonText, setButtonText] = useState('juanmanuelgilquiroga@gmail.com');

    const handleCopyClick = () => {
        setButtonText('Copiado!');
        setTimeout(() => {
        setButtonText('juanmanuelgilquiroga@gmail.com');
        }, 2000);
    };

    return (
        <>
            <div className="h-[35vh] flex flex-col justify-around items-center w-[70vw] mt-[20vh]" id='habilidades'>
                <h2 className="text-center text-4xl font-bold">Contacto</h2>
                <p className="font-medium text-center w-[70%]">No dudes en ponerte en contacto conmigo para discutir cómo puedo contribuir a tus ideas.</p>
                <motion.div whileHover={{ backgroundColor: '#BF1516', transition: { duration: 0.3 } }} whileTap={{ scale: 0.95 }}  onClick={handleCopyClick} className="rounded-3xl cursor-pointer bg-transparent flex justify-center items-center border-[0.2rem] border-custom-red w-[40vw] h-[10vh]" ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg><a id='correo' className="border-l-2 px-3 my-2 ml-3">{buttonText}</a></motion.div>
            </div>
            <div className="flex justify-between items-center w-[80vw] h-[12vh] border-t-2 border-custom-cream">
                <p className="font-medium text-center">@ 2024 / Juan Manuel Gil Quiroga</p>
                <div className="flex justify-between">
                    <a href="https://github.com/JuanManuelGilQuiroga"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
                    <a href="https://www.linkedin.com/in/juan-manuel-gil-quiroga-a7a641313/"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a>
                </div>
            </div>
        </>
    )
}