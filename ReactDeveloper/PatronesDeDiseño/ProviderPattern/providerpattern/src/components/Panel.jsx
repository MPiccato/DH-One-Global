import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Panel = ({ title, children }) => {

    const darkMode = useContext(ThemeContext)

    const className = darkMode ? "dark" : "light"
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}

        </section>
    )
}
