// Async function to handle the dynamic route for user pages. 
// It receives the username as a parameter and returns a simple JSX element displaying the username.
const UserPage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
   
    return <div>Usuario {username}</div>
}

// En la versión actual de Next.JS es necesario exportar el componente como default para que funcione correctamente la ruta dinámica.

export default UserPage;