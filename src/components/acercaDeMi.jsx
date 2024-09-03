export function AcercaDeMi () {
    return (
        <div className="h-[40vh] flex flex-col justify-between items-center">
            <h2 className="text-center text-4xl font-bold">Acerca de mi</h2>
            <div className="h-[80%] flex justify-between w-[60%]">
                <img src="../assets/fotoPerfil.png" alt="" className=" border-1 object-contain h-[80%]"/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quidem mollitia deleniti magni? Quasi laborum, fuga, tempore delectus harum ipsam obcaecati, ab maxime molestiae dicta necessitatibus magnam repudiandae dignissimos facere!</p>
            </div>
        </div>
    )
}