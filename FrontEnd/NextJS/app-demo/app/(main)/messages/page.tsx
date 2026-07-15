import Link from 'next/link';

const MessagePage = () => {
    const messages = [
            {username:"lpiccato",name:"Lautaro Piccato",message: "Buen programador", repliesCount:3},
            {username:"loloPiccato",name:"Lorenzo Piccato",message: "Le falta profundidad de conocimiento", repliesCount:15},
    ]


    
    return (
        <>
            <main className="flex flex-col bg-gray-100 p-4">
                <section className="flex flex-col mb-6">
                    {messages.map((mensaje, index) => (

                    <>
         
                        <div className="flex mb-3" key={index}>
                            <div className="rounded-full bg-gray-300 p-3 text-center w-15 mb-5">

                                <span className="text-lg font-semibold">MP</span> 
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className='flex'>
                                    <h4 className="font-semibold text-sm">
                                        {mensaje.name}
                                    </h4>
                                    <h3 className="text-sm ml-2 text-gray-600 cursor-pointer">
                                        <Link href={`https://www.facebook.com/${mensaje.username}`}>@{mensaje.username}</Link>   
                                    </h3>
                                </div>
                                <p>
                                    {mensaje.message}
                                </p>
                            </div>
                            

                            
                        </div>
                    
                    </>

                    
                ))}

                </section>
            </main>
        
        
        </>
    )
}
export default MessagePage;