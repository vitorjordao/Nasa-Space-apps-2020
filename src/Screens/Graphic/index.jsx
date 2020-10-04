import React, { useState } from 'react';
import './Graphic.css';
import Map from './Map';

function Graphic() {

    const [isCountry, setIsCountry] = useState(true);

    return (
        <>
            <header className="graphic" >
                <section className="graphic__options">
                    <h1 className="graphic__options__header">Select search type</h1>
                    <div className="graphic__options__options">
                        <div onClick={()  => setIsCountry(true)}>
                            <input type="radio" id="country" name="information-type" defaultChecked />
                            <label htmlFor="country">Countries</label>
                        </div>
                        <div onClick={()  => setIsCountry(false)}>
                            <input type="radio" id="industry" name="information-type" />
                            <label htmlFor="industry">Economic sectors</label>
                        </div>
                    </div>
                </section>
                { 
                    isCountry?
                        <section className="graphic__map">
                            <Map />
                        </section>:
                        <section className="graphic__economic-data">
                            <div>Electricity and heat production: responsible for around 25% of gas emissions in 2010.</div>
                            <div>Agriculture and land use: responsible for around 24% of global emissions in 2010.</div>
                            <div>Industry: responsible for approximately 21% of global emissions in 2010.</div>
                            <div>Transport: responsible for around 14% of global emissions in 2010.</div>
                            <div>Buildings: responsible for about 6% of global emissions.</div>
                            <div>Another energy: 10% energy sector that is not directly linked to the production of electricity or heat.</div>
                        </section>
                }
            </header>
        </>
    );
}

export default Graphic;