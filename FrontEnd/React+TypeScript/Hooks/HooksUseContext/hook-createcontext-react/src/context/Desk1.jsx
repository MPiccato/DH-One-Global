import { useContext } from "react"
import SharedNotes from "./SharedNotes"


export default function Desk1() {

    const {notes} = useContext(SharedNotes)
    return (
        <div className="desk1">
            <h2>Escritorio 1</h2>
           
            <ul>
               <li>
                {notes.map((nota, index) => {
                    return <p key={index}>{nota}</p>
                })}
               </li>
            </ul>


        </div>
    )

}