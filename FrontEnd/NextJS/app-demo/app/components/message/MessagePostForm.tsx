"use client"
import useMessages from '@/app/contexts/message.context';

import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type MessagePostFormProps = {
    parentId?: string
}

type FormData = {
    message: string;

}

const MessagePostForm = ({parentId}: MessagePostFormProps) => {

    const {postMessage} = useMessages();


    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>();

    useEffect(() => {
        setFocus("message")
    },[setFocus]);
    
    const onSubmit = async (data:FormData) => {
        await postMessage(data.message, parentId);
       
        resetField("message")
        setFocus("message")
    }

    return <>
        <div  className="grid grid-cols-12 mb-4">
            <div className='w-full h-full mt-1 text-center mb-4 block relative col-span-2'>
                <Image
                    src={"https://i.pinimg.com/564x/62/ce/55/62ce5561877ab6a4587a2b7dedd4c5ca.jpg"}
                    alt={``}
                    priority
                    className="rounded-full object-cover"
                    width={40}
                    height={40} />
            </div>
        </div>
        <div className='flex flex-col ml-4 m4-2 col-span-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea 
                    className='resize-none p-4 w-full mb-4 rounded bg-gray-50 border border-gray-200 '
                    rows={4} 
                    placeholder='¿Qué estás pensando?'
                    {...register("message", {required: true})}
      
                />

                <div className='flex justify-end'>
                    <button type ="submit" className='button-primary w-fit'>Postear</button>
                </div>
            </form>
            
        </div>
    </>
  
}

export default MessagePostForm;