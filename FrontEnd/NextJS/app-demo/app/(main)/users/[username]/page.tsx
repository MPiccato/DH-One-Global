
import UserTabs from "@/app/components/users/UserTabs";
import userAPI from "@/app/services/users/users.service";
import Image from "next/image";
import Link from "next/link";



const UserPage = async ({params}:{params: {username:string}}) => {
    
    //const { username } = params; // Corregido: 'params' no es una promesa, no se usa await.
    const userPromise =  userAPI.getUserData(params.username);
    const userMessagesPromise =  userAPI.getUserMessages(params.username)
    const userMessageRepliesPromise =  userAPI.getUserMessagesReplies(params.username)

    const [user, userMessage, userMessageReplies] = await Promise.all([userPromise,userMessagesPromise,userMessageRepliesPromise])
    

    console.log(user); // Ahora puedes loguear los datos

    
    return (

        <main className="flex flex-col bg-gray-100 p-4 text-black">
            <section className="flex flex-col mb-6">
                {/* Corregido: Se usa el componente Image de Next.js para mostrar la foto de perfil.
                    Se cambió la clase 'w-15' (inválida) por 'w-16' y 'h-16' para hacer un círculo.
                    Se usa 'object-cover' para que la imagen llene el espacio sin distorsionarse. */}
                <div className="relative w-16 h-16 mb-3">
                    <Image 
                        src={user.photoUrl}
                        alt={`Foto de perfil de ${user.name}`}
                        className="rounded-full object-cover"
                        fill
                    />
                </div>
                <h2 className="font-semibold mb-2 text-xl">
                    {user.name}
                </h2>
                <h3 className="text-md mb-2 text-gray-600 cursor-pointer">
                <Link href={`/users/${user.username}`}>@{user.username}</Link>
                    
                </h3>
                <div className="mb-3">
                    <h3>{user.bio}</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <div><span>Seguidores: <b>{user.followersCount}</b></span></div>
                    <div><span>Siguiendo: <b>{user.followingCount}</b></span></div>

                </div>


            </section>
            {/* Corregido: Pasamos los mensajes y respuestas del usuario. Usamos '?? []' para asegurar que siempre sea un array. */}
            <UserTabs messages={userMessage.content ?? []} replies={ userMessageReplies.content ?? []} />

           
            
        
        </main>
    )    
}

export default UserPage;