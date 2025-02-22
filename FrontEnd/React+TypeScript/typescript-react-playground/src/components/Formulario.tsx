import {useState} from 'react'

export const Formulario = () => {

    const [input,setInput]=useState<string>('')

    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)

    }
    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(`El nombre es: ${input}`)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name='nombre'
            onChange={handleInputChange}
            value={input}
            placeholder='Nombre...'

        />
    </form>
  )
}
