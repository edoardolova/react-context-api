import { createContext, useContext } from "react";
import { useState, useEffect } from 'react';


const GlobalContext = createContext();

function GlobalProvider({children}){
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
        <GlobalContext.Provider value={{products, setProducts, isLoading, setIsLoading}}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext(){
    return useContext(GlobalContext);
}

export {GlobalProvider, useGlobalContext}