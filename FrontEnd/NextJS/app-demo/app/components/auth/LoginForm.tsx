"use client"

import { useForm } from "react-hook-form"

type LoginFormData = {
    username: string,
    password: string
}


const LoginForm = () => {

    const onSubmit = (data:LoginFormData) => {
        console.log(JSON.stringify(data))
    }

    const {register, handleSubmit} = useForm<LoginFormData>()
  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
            <div className="mb-2 flex flex-col">
                <label>Nombre de Usuario:</label>
                <input 
                    {...register("username")}
                    className="p-4  mb-4 rounded bg-gray-50 border border-gray-200"
                    type="text" placeholder="Martin Piccato"/>
            </div>
            <div className="mb-2 flex flex-col">
                <label>Contraseña:</label>
                <input 
                    {...register("password")}
                    className="p-4  mb-4 rounded bg-gray-50 border border-gray-200" 
                    type="password" />
            </div>
            <div>
                <button 
                    onClick={handleSubmit(onSubmit)}
                    className="link-primary">Ingresar</button>
            </div>
        </form>
  )
}

export default LoginForm