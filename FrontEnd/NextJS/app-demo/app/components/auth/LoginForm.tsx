"use client"

import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton"

type LoginFormData = {
    username: string,
    password: string
}
const schema = yup
    .object({
            username: yup.string().required(),
            password: yup.string().required(),
    })
    .required()

 const onSubmit = (data:LoginFormData) => {
        console.log(JSON.stringify(data))
    }

const LoginForm = () => {


    const methods = useForm<LoginFormData>({
        resolver: yupResolver(schema)})
    
    const {register, handleSubmit, formState:{errors}} = methods


    return (
        <FormProvider {...methods}>

            <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="mb-2 flex flex-col">
                        <label className="mb-2">Nombre de Usuario:</label>
                        <input 
                            {...register("username")}
                            className="p-4  mb-4 rounded bg-gray-50 border border-gray-200"
                            type="text" placeholder="Martin Piccato"/>
                        {errors?.username && <h4 className="text-red-400 mt-2">Este campo es obligatorio</h4>}    
                        
                    </div>
                    <div className="mb-2 flex flex-col">
                        <label className="mb-2">Contraseña:</label>
                        <input 
                            {...register("password")}
                            className="p-4  mb-4 rounded bg-gray-50 border border-gray-200" 
                            type="password"/>
                        {errors?.password && <h4 className="mt-2 text-red-600">Este campo es requerido</h4>}
                    </div>

                    <SubmitButton 
                        label="Ingresar"
                        onSubmit={onSubmit}
                        styles="mb-2"/>
                    
                </form>
            </FormProvider>
    )
    }

export default LoginForm