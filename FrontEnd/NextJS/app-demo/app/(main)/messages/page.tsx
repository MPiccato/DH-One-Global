import Message from '@/app/components/message/Message';
import Link from 'next/link';

const MessagePage = () => {
    const messages = [
            {username:"lpiccato",name:"Lautaro Piccato",message: "Buen programador", repliesCount:3},
            {username:"loloPiccato",name:"Lorenzo Piccato",message: "Le falta profundidad de conocimiento", repliesCount:15},
    ]


    
    return (
        <>
            <main className="flex flex-col bg-gray-100 p-4 text-black">
                <section className="flex flex-col mb-6">
                    {messages.map((mensaje, index) => (
                        <Message key={index} message={mensaje} />
    
                ))}

                </section>
            </main>
        
        
        </>
    )
}
export default MessagePage;