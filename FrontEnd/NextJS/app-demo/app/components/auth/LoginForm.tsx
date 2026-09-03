"use client"

import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton"
import InputText from "../form/InputText"

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
                    <InputText 
                        label="Nombre Usuario" 
                        placeholder="Martin Piccato" 
                        fieldName="name" type="text"
                        styles="mb-2"
                    />
                    <InputText 
                        label="Contraseña" 
                        placeholder="••••••••" 
                        fieldName="password" type="password"
                    />

                    <SubmitButton 
                        label="Ingresar"
                        onSubmit={onSubmit}
                        styles="mb-2"/>
                    
                </form>
        </FormProvider>
    )
    }

export default LoginForm