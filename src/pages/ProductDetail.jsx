import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function ProductDetail(){
    const {id} = useParams();
    const url= `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)
    const [nextProductExists, setNextProductExists] = useState(true);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); 
    

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setProduct(data);
            setIsLoading(false);
            
            //check if next exist
            fetch(`https://fakestoreapi.com/products/${parseInt(id) + 1}`)
            .then((res) => res.json())
            .then(() => {
                setNextProductExists(true); 
            })
            .catch(() => {
                setNextProductExists(false); 
            });
        });
    }, [id]);

    const goPrevious = () => {
        if (id > 1) {
            navigate(`/products/${parseInt(id) - 1}`);
        }
    };

    const goNext = () => {
        if (nextProductExists) {
            navigate(`/products/${parseInt(id) + 1}`);
        }
    };
    return(
        <>
            {isLoading? (
                <h2>Loading</h2>
            ) : (product &&(
                    <div className="container">
    
                        <div className="row">
                            <div className="col-12 my-5">
                                <div className="card border-0">
                                    <div className="row">
                                        <div className="col-1 d-flex">
    
                                            <button className="btn border-0 my-auto" onClick={goPrevious}><i class="bi bi-arrow-left-circle-fill fs-3"></i></button>
                                        </div>
                                        <div className="col-5  d-flex">
                                                <img src={product.image} className="img-fluid mx-auto" style={{height:'600px'}} alt={product.title} />
                                        </div>
                                        <div className="col-1 d-flex">
                                                <button className="btn border-0 my-auto" onClick={goNext}><i class="bi bi-arrow-right-circle-fill fs-3"></i></button>
    
                                        </div>
                                        <div className="col-5 ">
                                            <div className="card-body px-1 d-flex flex-column h-100" key={product.id}>
                                                <h1 className="card-title mb-3">{product.title}</h1>
                                                <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Categoria:</span>{product.category}</p>
                                                <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Prezzo:</span>{product.price}€</p>
                                                <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Descrizione:</span>{product.description}</p>
                                                <button className="btn btn-primary w-25 mt-4 ">Compra</button>
                                            </div>
                                        </div>
    
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            )}
        </>
    )
}