import ProductCard from "./ProductCard"

export default function ProductList({products}){


    return(
        <div className="row gy-3 py-4">
            {products.map((product, index)=>{
                return(
                    <ProductCard product={product}/>
                )
            })}
        </div>
    )
}