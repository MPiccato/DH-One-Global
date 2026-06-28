import { useState } from 'react'
import Office from './context/Office'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>Uso de useContext</p>
     <Office/>
    </>
  )
}

export default App
