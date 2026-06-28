export const ProductFunctional = ({ title }) => {


    const [name, serName] = useState('');
    const [price, setPrice] = useState(0);

    //Montado: el useEffect es al ComponnetDidMount de componentes de clase

    useEffect(() => {
        console.log("Componente montado")
    }, []);

    const handleAddProduct = () => {
        console.log("Agregar producto")
    }

    const modifyPrice = (newPrice) => {
        setPrice(newPrice)
    }



    return (
        <>
            <h1>{title}</h1>
            <p>Nombre: {name}</p>
            <p>Precio: {price}</p>
            <button onClick={handleAddProduct}>Agregar Producto</button>

        </>
    )
}