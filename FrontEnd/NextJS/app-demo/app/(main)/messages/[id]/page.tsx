export default async function Messages({ params }: { params: { id: string } }) {
    const { id } = await params;
    console.log("Message ID:", id); // Log the message ID to the console for debugging
    return (
        <div>
            <h1>Mensaje Individual</h1>
            <p>Este es el mensaje con ID: {id}</p>
        </div>
    );
}