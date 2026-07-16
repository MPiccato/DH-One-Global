import Link from "next/link";

const Menu = () => {
    return <>
        <nav className="flex flex-col">
            <ul className="mb-2">
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400 w-full">
                    <Link href="/" className="flex w-full px-2">Inicio</Link>
                </li>
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400 w-full">
                    <Link href="/" className="flex w-full px-2">Perfil</Link>
                </li>
                <li className="text-xl mb-2 hover:border-b-2 border-blue-400 w-full">
                    <Link href="/" className="flex w-full px-2">Explorar</Link>
                </li>
            </ul>
            <button className='button-primary'>Postear</button>

        </nav>
    </>
}

export default Menu;