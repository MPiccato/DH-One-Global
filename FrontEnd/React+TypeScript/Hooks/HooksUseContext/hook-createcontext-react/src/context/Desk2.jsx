import { useContext } from "react";
import SharedNotes from "./SharedNotes";

export default function Desk2() {

    const {addNotes} = useContext(SharedNotes);

    return (


        <div className="desk2">
            <div>
                <button onClick={()=>addNotes('Nota agregada')}>Agregar Nota</button>
            </div>
        </div>
    )
}