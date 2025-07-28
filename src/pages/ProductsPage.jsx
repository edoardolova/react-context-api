import ProductList from '../components/ProductList';

import { useGlobalContext } from '../contexts/GlobalContext';

export default function ProductsPage(){
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true); 

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('https://fakestoreapi.com/products')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         setProducts(data); 
    //         setIsLoading(false); 
    //     })
    //     .catch((err) => {
    //         console.error(err.message); 
    //     });
    // }, []);
    const {products, isLoading} = useGlobalContext();
    
    return(
        <>
        {isLoading ?(
            <h3>loading</h3>
        ) :(

            <div className="container">
                <h1 className="mt-5">SCOPRI I NOSTRI PRODOTTI</h1>
                <ProductList products={products}/>
            </div>

        )}
        
        </>
    )
}