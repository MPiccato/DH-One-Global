import { LinkType } from "@/app/types/links.type";
import Link from "next/link";

type MenuProps = {
    links: LinkType[]
};

const Menu = ({links}: MenuProps) => {
    return <>
        <nav className="flex flex-col w-full">
            <ul className="mb-2" w-full>
                {links && links.map((link, index) => (
                    <li key = {`link-${index}`} className="text-xl mb-2 hover:border-b-2 border-blue-400 w-full">
                    
                    <Link href={link.href} className="flex w-full px-2">{link.title}</Link>
                </li>
                ))}
                
               
            </ul>
            <button className='button-primary'>Postear</button>

        </nav>
    </>
}

export default Menu;