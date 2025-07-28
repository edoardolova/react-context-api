import ProductList from '../components/ProductList';

import { useGlobalContext } from '../contexts/GlobalContext';

export default function ProductsPage(){
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