const Menu = () => {
    return <>
        <nav>
            <ul className="mb-2">
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400" >Inicio</li>
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400">Perfil</li>
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400" >Explorar</li>
            </ul>
            <button className='button-primary'>Postear</button>

        </nav>
    </>
}

export default Menu;