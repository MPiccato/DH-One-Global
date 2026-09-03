"use client"

import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SubmitButton from "../form/SubmitButton"
import InputText from "../form/InputText"

type RegisterFormData = {
    username: string,
    password: string,
    name:string,
    photoURL: string
}
const schema = yup
    .object({
            username: yup.string().required(),
            password: yup.string().required(),
            name: yup.string().required(),
            photoURL: yup.string().required(),
    })
    .required()

 const onSubmit = (data:RegisterFormData) => {
        console.log(JSON.stringify(data))
    }

const RegisterForm = () => {


    const methods = useForm<RegisterFormData>({
        resolver: yupResolver(schema)})

    const {register, handleSubmit, formState:{errors}} = methods;
    
    return (
        <FormProvider {...methods}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <InputText 
                    label="Nombre Usuario" 
                    placeholder="Martin Piccato" 
                    fieldName="name" type="text"
                    styles="mb-2"/>
                    
                   
                <div className="mb-2 flex flex-col">
                    <label>Foto de Perfil:</label>
                    <input 
                        {...register("photoURL")}
                        className="p-4  mb-4 rounded bg-gray-50 border border-gray-200"
                        type="text" placeholder="https://Photo..."/>
                    {errors?.photoURL && <h4 className="text-red-400 mt-2">Este campo es obligatorio</h4>}    
                    
                </div>
                <InputText 
                    label="Contraseña" 
                    placeholder="••••••••" 
                    fieldName="password" type="password"/>
                    
                <SubmitButton
                    label="Crear Cuenta"
                    onSubmit={onSubmit}
                    styles="mb-2 "
                />
            </form>
        </FormProvider>
    )
    }

export default RegisterForm;