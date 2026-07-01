import Link from "next/link";

export default async function UsersPage({params}: {params: {username: string}}) {
    const {username} = await params;
        // Log the username to the console for debugging
    const user = {
      id: 1,
      name: "Martin Piccato",

      usuario: username,
      bio: "Este es un usuario de ejemplo.",
      followers: 100,
      following: 50,
      messages: [
        {id:1, content: "Hola, este es un mensaje de ejemplo.", repliesCount: 13},
        {id:2, content: "Este es otro mensaje de ejemplo.", repliesCount:8}
      ],
      respuestas: [
        {id:1, content: "Esta es una respuesta de ejemplo.", likesCount: 5},
        {id:2, content: "Esta es otra respuesta de ejemplo.", likesCount: 3}
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
                <Link href="https://www.x.com/mpiccato">@{user.usuario}</Link>
              </div>
              <div className="text-md mb-4 ">Bio: {user.bio}</div>
              <div className=" flex justify-between justify-between w-1/4 mb-4">
                <div>Seguidores: <span className="font-bold">{user.followers}</span></div>
                <div>Seguidos: <span className="font-bold">{user.following}</span></div>
              </div>
              <div className="flex justify-evenly w-1/2 mb-4">
                <div>Mensajes</div>
                <div>Respuestas</div>

              </div>

      </section>
      
      <div>
        {user.messages.map((mensaje, index) => 
          <div key={index}>
            <p>{mensaje.content}</p>
            <p>Cantidad de respuestas: {mensaje.repliesCount}</p>
          </div>
        )}
      </div>
    </main>
    
  );
}