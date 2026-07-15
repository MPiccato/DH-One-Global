import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({children}) => {
    return <>
        <header className="flex justify-between mb-4 px-8 py-4  bg-gray-200 text-black">
            <div>
                Logo
            </div>
            <div className="flex ml-4 gap-5">
                <div>
                    <Link href="/users/mpiccato">Usuarios</Link>  
                </div>
                <div>
                    <Link href="/messages">Messages</Link>
                </div>
            </div>

        </header>
        <main className="px-8">
            {children}
        </main>

    </>
}
export default UsersLayout;
