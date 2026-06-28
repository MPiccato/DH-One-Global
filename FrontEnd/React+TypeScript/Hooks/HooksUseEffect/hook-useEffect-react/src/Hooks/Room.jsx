import { useEffect, useState } from "react";


function Room() {
    const [isLightOn, setIsLightON] = useState(true);
    const [canvasColor, setCanvasColor] = useState('white');

    useEffect(() => {
        if(isLightOn){
            setCanvasColor('white')
        } else {
            setCanvasColor('black')
        }


    },[isLightOn])

    return (
        <div>
            <button onClick={()=> setIsLightON(!isLightOn) }>
                {isLightOn ? 'Apagar' : 'Encender'}
            </button>
            <p>El lienzo está pintado de color {canvasColor}</p>
        </div>
    )
    
}

export default Room