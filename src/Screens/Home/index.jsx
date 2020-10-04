import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";

function Home() {
    return ( 
        <>
            <header className="header-title" >
                <h1 className="header-title__title">Space Carbon Information</h1>
                <div className="header-title__next">
                    <span className="header-title__next__text">See the most alarming data on our carbon footprint!</span>
                    <Link to="/graph" className="header-title__next__button"><FontAwesomeIcon icon={faAngleDoubleDown} /></Link>
                </div>
            </header>
        </>
    );
}

export default Home;