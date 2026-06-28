import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Button = ({ children }) => {
    const darkMode = useContext(ThemeContext)

    const className = darkMode ? "dark" : "light";
    return (
        <button className={className} > {children}</button>
    )
}
