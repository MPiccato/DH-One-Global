import Message from "@/app/components/messages";
import UserTabs from "@/app/components/users/UserTabs";
import Link from "next/link";

export default async function UsersPage({params}: {params: {username: string}}) {
    const {username} = await params;
    console.log(username);
        // Log the username to the console for debugging
    const user = {
      id: 1,
      name: "Martin Piccato",

      usuario: username,
      bio: "Este es un usuario de ejemplo.",
      followers: 100,
      following: 50,
      messages: [
        {id:1,name:"Martin Piccato", username: "mpiccato", content: "Hola, este es un mensaje de ejemplo.", repliesCount: 13},
        {id:2,name:"Martin Piccato", username: "mpiccato", content: "Este es otro mensaje de ejemplo.", repliesCount:8}
      ],
      respuestas: [
        {id:3, name: "Martin Piccato", username: "mpiccato", content: "Esta es una respuesta de ejemplo.", repliesCount: 5},
        {id:4, name: "Martin Piccato", username: "mpiccato", content: "Esta es otra respuesta de ejemplo.", repliesCount: 3}
      ]
    }
  return (

    <main className = "flex flex-col ">
      <section className="flex flex-col items-center mb-10">

        <div className="rounded-full p-6 bg-red text-center w-16 h-16 mb-10">
                <span className="font-bold text-xl text-white">MP</span>
        </div>
              <div className="font-semibold text-lg mb-1">{user.name}</div>
              <div className="text-md mb-4 text-gray-400">
                Usuario: 
                <Link href={`https://www.x.com/${user.usuario}`}>@{user.usuario}</Link>
              </div>
              <div className="text-md mb-4 ">Bio:{user.bio}</div>
              <div className=" flex justify-between justify-between w-1/4 mb-4">
                <div className="flex flex-col justify-evenly mb-4">
                  Seguidores: <span className="font-bold">{user.followers}</span></div>
                <div className="flex flex-col mx-10 justify-evenly  mb-4">Seguidos: <span className="font-bold">{user.following}</span></div>
              </div>
      </section>
      <UserTabs mensajes={user.messages} respuestas={user.respuestas} />
      
     
    </main>
    
  );
}