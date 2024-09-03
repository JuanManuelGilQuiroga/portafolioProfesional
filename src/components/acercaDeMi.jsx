import fotoPerfil from '../assets/fotoPerfil.png'

export function AcercaDeMi () {
    return (
        <div className="h-[70vh] flex flex-col justify-between items-center" id='acercaDeMi'>
            <h2 className="text-center text-4xl font-bold">Acerca de mi</h2>
            <div className="h-[80%] flex justify-center gap-20 w-[80%]">
                <img src={fotoPerfil} alt="" className="rounded-full border-1 object-contain h-[80%] "/>
                <div className='w-[60%] h-[100%] flex-col justify-evenly gap-24'>
                    <p className='w-[100%] font-medium text-[1.2rem]' >Soy un desarrollador Junior, he tenido la oportunidad de participar en proyectos usando Python, Javascript, MySQL y MongoDB, ademas de unos cuantos proyectos Web como landing pages e E-commerce. </p>
                    <p className='w-[100%] font-medium mt-[5%] text-[1.2rem]'>Habilidades blandas de las cuales puedo destacar la comunicación, la gestion emocional y la resiliencia. Habilidades que en conjunto promueven un ambiente de trabajo colaborativo.</p>
                </div>
            </div>
        </div>
    )
}