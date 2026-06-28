import { useState } from "react"
import SharedNotes from "./SharedNotes"
import Desk1 from "./Desk1";
import Desk2 from "./Desk2";

export default function Office() {

    const [notes, setNotes] = useState([]);

    const addNotes = (note) => {
        console.log(note)
        setNotes([...notes, note])
    }

    return (
        <SharedNotes.Provider value={{notes, addNotes}}>
            <div>
                <div className ='office'>
                    <h2>Oficina Compartida</h2>
                    <Desk1/>
                    <Desk2/>
                </div>
            </div>
        </SharedNotes.Provider>
    )
}