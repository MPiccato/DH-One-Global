const MessagePage = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
    console.log(id)
    return <>Page de mensajes {id}</>
}

export default MessagePage;