const MessagesPage = async ({params}:{params: {id:string}}) => {
    const {id} = await params;
    console.log(id);
    return <>
        <h1>Messages Page: {id}</h1>
    </>
}
export default MessagesPage;