import Link from "next/link";

const UserPage = async ({params}:{params: {username:string}}) => {
    const {username} = await params;

    const user = {
        username: username.toLowerCase(),
        name: 'Martin Piccato',
        bio: 'Full Stack Developer',
        followersCount: 15,
        followingCount: 3,
        messages: [
            {username:"mpiccato",name:"Martin Piccato",message: "Buen programador", repliesCount:3},
            {username:"mpiccato",name:"Martin Piccato",message: "Le falta profundidad de conocimiento", repliesCount:15},
        ],
        replies: [
            {message: "Es cierto que es bueno", repliesCount:2},
            {message: "Lo bueno es que va aprendiendo", repliesCount:4},
        ]

    }
    
    return (

        <main className="flex flex-col bg-gray-100 p-4">
            <section className="flex flex-col mb-6">
                <div className="rounded-full bg-gray-300 p-4 text-center w-15 mb-3">
                    <span className="text-lg font-semibold">MP</span> 
                </div>
                <h2 className="font-semibold mb-2 text-xl">
                    {user.name}
                </h2>
                <h3 className="text-md mb-2 text-gray-600 cursor-pointer">
                <Link href={`https://www.facebook.com/${user.username}`}>@{user.username}</Link>
                    
                </h3>
                <div className="mb-3">
                    <h3>{user.bio}</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <div><span>Seguidores: <b>{user.followersCount}</b></span></div>
                    <div><span>Siguiendo: <b>{user.followingCount}</b></span></div>

                </div>


            </section>
            <div className="flex justify-evenly mb-3">
                <div className="cursor-pointer border-b-4 border-black-300">Mensajes</div>
                <div className="cursor-pointer">Respuestas</div>
            </div>
            <div>
                {user.messages.map((mensaje, index) => (

                    <>
         
                        <div className="flex mb-3" key={index}>
                            <div className="rounded-full bg-gray-300 p-3 text-center w-15 mb-5">

                                <span className="text-lg font-semibold">MP</span> 
                            </div>
                            <div className="flex flex-col ml-3">
                                <div className='flex'>
                                    <h4 className="font-semibold text-sm">
                                        {user.name}
                                    </h4>
                                    <h3 className="text-sm ml-2 text-gray-600 cursor-pointer">
                                        <Link href={`https://www.facebook.com/${user.username}`}>@{user.username}</Link>   
                                    </h3>
                                </div>
                                <p>
                                    {mensaje.message}
                                </p>
                            </div>
                            

                            
                        </div>
                    
                    </>

                    
                ))}
            </div>
            
        
        </main>
    )    
}

export default UserPage;