import React, { useState } from 'react';
import './Graphic.css';
import Map from './Map';

function Graphic() {

    const [isCountry, setIsCountry] = useState(true);

    return (
        <>
            <header className="graphic" >
                <section className="graphic__options">
                    <h1 className="graphic__options__header">Selecione o tipo de pequisa</h1>
                    <div className="graphic__options__options">
                        <div onClick={()  => setIsCountry(true)}>
                            <input type="radio" id="country" name="information-type" defaultChecked />
                            <label htmlFor="country">Países</label>
                        </div>
                        <div onClick={()  => setIsCountry(false)}>
                            <input type="radio" id="industry" name="information-type" />
                            <label htmlFor="industry">Setores económicos</label>
                        </div>
                    </div>
                </section>
                { 
                    isCountry?
                        <section className="graphic__map">
                            <Map />
                        </section>:
                        <section className="graphic__economic-data">
                            <div>Produção de eletricidade e calor: responsável por cerca de 25% da emissão dos gases em 2010.</div>
                            <div>Agricultura e usos da terra: responsável por cerca de 24% da emissão global em 2010.</div>
                            <div>Indústria: responsável por cerca de 21% da emissão global em 2010.</div>
                            <div>Transporte: responsável por cerca de 14% da emissão global em 2010.</div>
                            <div>Edifícios: responsável por cerca de 6% da emissão global.</div>
                            <div>Outra energia: 10% setor de energia que não está diretamente ligado a produção de eletricidade ou calor.</div>
                        </section>
                }
            </header>
        </>
    );
}

export default Graphic;