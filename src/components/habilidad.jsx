export function Habilidad ({tecnologias}) {
    return (
        <>
            {tecnologias.map((tec, index) => {
                return (
                    <div key={index} className="flex justify-around items-center bg-custom-black-secondary rounded-md px-4 py-2">
                        <img src={tec.icon} alt="" />
                        <h3 className="text-[1.2rem] font-semibold">{tec.nombre}</h3>
                    </div>        
                )
            })}
        </>
    )
}