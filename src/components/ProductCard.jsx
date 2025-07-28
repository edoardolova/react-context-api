import { Link } from 'react-router-dom';


export default function ProductCard({product}){
    return(

        <div className="col-12 col-md-4">
            <div className="card h-100  ">
                <img src={product.image} className="card-img rouded" alt={product.title} />
                <div className="card-body px-1 d-flex flex-column" key={product.id}>
                    <h3 className="card-title mb-3">{product.title}</h3>
                    <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Prezzo:</span>{product.price}€</p>
                    <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Categoria:</span>{product.category}</p>
                </div>
                <Link className='btn btn-primary' to={`/products/${product.id}`}>Scopri</Link>
            </div>
        </div>
    )
}