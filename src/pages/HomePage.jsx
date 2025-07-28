export default function HomePage(){
    return(
        <>
            <div class="p-5  bg-light ">
                <div class="container py-5">
                    <h1 class="display-5 fw-bold">Benvenuti alla TXT</h1>
                    <p class="col-md-8 fs-4">
                        Scopri una vasta selezione di prodotti: abbigliamento, zaini e molto altro. Con TXT, qualità e stile sono a portata di mano!
                    </p>
                    <button class="btn btn-primary btn-lg" type="button">
                        Scoprici
                    </button>
                </div>
            </div>

            <div className="partners bg-dark py-3 text-white text-center">
                <h3 className="mb-3">SCOPRI I NOSTRI PARTNERS</h3>
                    <ul className="d-flex">
                        <li className="ms-auto me-3">
                            <a href="#" className="fw-semibol fs-5">AMAZON</a>
                        </li>
                        <li className="me-3">
                            <a href="#" className="fw-semibol fs-5">TIFFANY</a>
                        </li>
                        <li className="me-3">
                            <a href="#" className="fw-semibol fs-5">CHANEL</a>
                        </li>
                        <li className="me-3">
                            <a href="#" className="fw-semibol fs-5">ADIDAS</a>
                        </li>
                        <li className="me-auto">
                            <a href="#" className="fw-semibol fs-5">NIKE</a>
                        </li>
                    </ul>
            </div>

            <div className="collaborator container py-5">

                <div className="row">
                    <div className="col-5">
                        <h2 className="mb-3">Il team che muove TXT</h2>
                        <p>
                            Alla base di TXT ci sono talenti concreti: professionisti con una visione comune, che uniscono creatività, cura del dettaglio ed entusiasmo. Il nostro team è costante innovazione, con un occhio sempre attento alla qualità e alla soddisfazione del cliente.
                        </p>
                    </div>
                    <div className="col-7">
                        <img className="img-fluid rounded" src="https://www.marinaosnaghi.com/wp-content/uploads/2019/05/Costruire-un-team-vincente.jpeg" alt="" />
                    </div>
                </div>

            </div>
            <div className="products container py-5">
                <div className="row">
                    <div className="col-7">
                        <img className="img-fluid rounded" src="https://cdn.sell2.brightspotcdn.com/dims4/default/7211555/2147483647/strip/true/crop/1464x725+0+0/resize/1464x725!/quality/90/?url=https%3A%2F%2Fsell2-production-sell2.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb5%2F94%2F3316a67d4d8a95afbcafdba86f81%2Fhigh-demand-products-collage.jpg" alt="" />
                    </div>
                    <div className="col-5">
                        <h2 className="mb-3">Scopri i nostri prodotti</h2>
                        <p>
                           Da TXT trovi una selezione pensata per soddisfare ogni esigenza: dall’abbigliamento casual e trendy agli accessori pratici e stilosi, come zaini e borse. Ogni prodotto è scelto con cura per offrirti il massimo in termini di qualità, comfort e design. Esplora le nostre collezioni, ideali per ogni occasione, e trova ciò che fa per te, con uno stile unico e sempre attuale.
                        </p>
                    </div>

                </div>

            </div>

            <div className="rating container text-center py-3">
                <h2>Le opinioni che contano</h2>
                <p>
                    I nostri clienti sono la nostra risorsa più preziosa. Le recensioni che riceviamo ci spingono a fare sempre meglio, per offrirti prodotti e servizi di alta qualità. Scopri perché tanti clienti scelgono TXT ogni giorno.
                </p>
                
                <img style={{height: '200px', }}src="https://media.istockphoto.com/id/1367691681/vector/five-star-rating-vector-in-paper-cut-style-design-isolated-on-grey-background-feedback.jpg?s=612x612&w=0&k=20&c=G9InAZmZqq7_rpmPyCkVqngtTix5N2AZpjmxvhrtrbc=" alt="" />
            </div>
                
        </>
    )
}