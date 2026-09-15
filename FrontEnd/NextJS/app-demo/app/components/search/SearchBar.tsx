"use client"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
    query: string
}

type SearchBarProps = {
    initialQuery?: string
}

const SearchBar = ({ initialQuery }: SearchBarProps) => {

    const router = useRouter();

    const {register, handleSubmit, setValue} = useForm<FormData>({
        defaultValues: {
            query: initialQuery ?? ''
        }
    });
    const onSubmit= (data: FormData) => {
        router.push(`/?query=${data.query ?? ''}&type=hash`);
    }

    useEffect(() => {
        setValue('query', initialQuery ?? '');
    }, [initialQuery, setValue])
  return (
    
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full mb-4">

            <input 
                {...register("query")}
                defaultValue={initialQuery}

                className="grow mr-4 p-4 rounded bg-gray-50 border border-gray-200"
                type="text" placeholder="Buscar #HashTag..."/>
            <button type="submit" className="button-primary">Buscar</button>
        </form>
  )
}

export default SearchBar;