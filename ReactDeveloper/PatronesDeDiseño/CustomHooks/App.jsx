import React from 'react'
import { useToggle } from './Hooks/customHooks'

export const ToggleButton = () => {

    const [toggle, setToggle] = useToggle();
    return (
        <button onClick={setToggle}>{toggle ? "ON" : "OFF"}</button>
    )
}
