import {FieldValues, useFormContext } from "react-hook-form"

type SubmitFormProps<T> = {
    label: string,
    styles?: string,
    onSubmit: (data: T) => void

}

const SubmitButton = <T extends FieldValues,>({label,styles, onSubmit}: SubmitFormProps<T>) => {
    const { handleSubmit } = useFormContext<T>()
  return (
    <div className={`${styles ?? ''}`}>
                    {/* Otra forma de escribir el styles: {`${styles ?? ''}`} */}
                    <button 
                        onClick={handleSubmit(onSubmit)}
                        className="button-primary justify-around w-full">{label}</button>
                </div>
  )
}

export default SubmitButton;