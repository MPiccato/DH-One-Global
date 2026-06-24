import { FC,PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({children}) => {
    return <>
    <header>
        <h1>Encabezado de la página Main</h1>
    </header>
    <main>{children}</main>
    <footer>Pie de página Main</footer>
    </>

}

export default UsersLayout;