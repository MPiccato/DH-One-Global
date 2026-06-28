export default async function UsersPage({params}: {params: {username: string}}) {
    const {username} = await params;
    console.log("Username:", username); // Log the username to the console for debugging
  return (
    <div>
      <h1>Usuario Individual</h1>
      <p>Este es el perfil del usuario: {username}</p>
    </div>
  );
}