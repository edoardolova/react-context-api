import React from 'react';

export default function AboutPage() {
    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Chi Siamo</h1>

                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2 className="fw-bold">La Nostra Storia</h2>
                        <p>
                            Benvenuti su TXT! Siamo un'azienda che nasce dalla passione per la qualità e l'innovazione.
                            Offriamo una vasta gamma di prodotti, dall'abbigliamento agli accessori, pensati per soddisfare
                            ogni esigenza dei nostri clienti. Il nostro obiettivo è fornire esperienze uniche e prodotti che
                            combinano comfort, stile e funzionalità.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://img.zerounoweb.it/wp-content/uploads/2018/05/18170133/Azienda-del-futuro.jpg" alt="Immagine Azienda" className="img-fluid rounded shadow-lg"/>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6">
                        <h2 className="fw-bold">La Nostra Missione</h2>
                        <p>
                            La nostra missione è semplice: vogliamo rendere ogni persona che entra in contatto con i nostri
                            prodotti felice e soddisfatta. Siamo impegnati a offrire articoli di alta qualità, progettati con
                            un occhio attento alla sostenibilità e all'innovazione.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold">La Nostra Visione</h2>
                        <p>
                            Immaginiamo un futuro dove TXT sarà un marchio globale sinonimo di qualità, sostenibilità e
                            innovazione. Vogliamo espandere la nostra presenza a livello internazionale, portando il nostro
                            stile e la nostra passione in ogni angolo del mondo.
                        </p>
                    </div>
                </div>

                <div className="row mb-5 text-center">
                    <h2 className="w-100 mb-4">Il Nostro Team</h2>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://media.istockphoto.com/id/1286810719/it/foto/sorridente-allegro-giovane-adulto-di-etnia-afroamericana-che-guarda-la-telecamera-in-piedi.jpg?s=612x612&w=0&k=20&c=xu6uqSCd5Zmcb4XGrtD44vgghHIaXXTJmE0a9qjgF6g=" alt="Membro Team" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }}/>
                            <div className="card-body">
                                <h5 className="card-title">Luca Bianchi</h5>
                                <p className="card-text">CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://img.freepik.com/fotos-premium/linda-mujer_298317-1327.jpg" alt="Membro Team" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }}/>
                            <div className="card-body">
                                <h5 className="card-title">Maria Rossi </h5>
                                <p className="card-text">Responsabile Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://media.istockphoto.com/id/624652254/it/foto/allegro-ritratto-giovane-sorridente.jpg?s=612x612&w=0&k=20&c=dfw9E0zzrdZVf31U1U067shN_Q84FSI6b1JZDzN2WXA=" alt="Membro Team" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '150px', height: '150px' }}/>
                            <div className="card-body">
                                <h5 className="card-title">Giovanni Verdi</h5>
                                <p className="card-text">Direttore Finanziario</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <h2 className="mb-4">Contattaci</h2>
                        <p>Seguici sui nostri canali social o inviaci un'email per maggiori informazioni!</p>

                    </div>
                </div>
            </div>
        </>
    );
}
