import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

export default function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setProducts(data); 
            setIsLoading(false); 
        })
        .catch((err) => {
            console.error(err.message); 
        });
    }, []);
    
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