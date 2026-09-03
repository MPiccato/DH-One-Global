import { FieldValues, useFormContext } from "react-hook-form";

type InputTextProps = {
    label: string,
    placeholder?: string,
    styles?: string,
    fieldName: string,
    type: 'text' | 'password' | 'email'

}

const InputText = ({label, placeholder, styles,type, fieldName}: InputTextProps) => {
  const methods = useFormContext()
    const {register, formState:{errors}} = methods;
    return (
        <div className={`flex flex-col ${styles ?? ''}`}>
            <label>{label}:</label>
            <input 
                {...register(fieldName)}
                className="p-4  mb-4 rounded bg-gray-50 border border-gray-200"
                type={type} placeholder={placeholder ?? ''}/>
            {errors?.[fieldName] && <h4 className="text-red-400 mt-2">Hay un error</h4>}    
            
        </div>
  )
}

export default InputText