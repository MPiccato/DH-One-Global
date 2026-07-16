import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Menu from "../components/menu/Menu";


const LINKS = [
      {title:'Inicio', href:'/'},
      {title:'Explorar',href:'/explorar'},
      {title:"Perfil",href:'/mi-perfil'}
    ]


const UsersLayout: FC<PropsWithChildren> = ({children}) => {
    return <>
        <div className = "w-full h-full grid grid-cols-12 text-blue">
        
            <div className='col-span-3'>
                <Menu links={LINKS} />
            
            </div>
            <main className=" col-span-6 px-8">
                {children}
            </main>
            <div className='col-span-3'>Footer</div>
        </div>

    </>
}
export default UsersLayout;
