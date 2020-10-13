import React from 'react'
import "../style/gas.css"
import gasFuel from '../images/gasFuel.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const Producto = ({product}) => {
    

    return (
        <section>
              <section className="locagtion-map">
        <div className="background-location-map">
            <h1>Encuentra la mas cercana</h1>
            <div className="location-icon">
                <a href="#"><FontAwesomeIcon icon ={faMapMarkerAlt}/><i class="fas fa-map-marker-alt"></i></a>
            </div>
        </div>
    </section>

    <section className="options">
        <div className="background-options">
            <h1>Descubre la mejor opción</h1>
            <div className="frames">
                <figure className="frame1">
                    <img src={gasFuel} alt=""/>
                    <h2>Regular</h2>
                    <h2>99999</h2>
                </figure>
                <figure className="frame2">
                    <img src={gasFuel} alt=""/>
                    <h2>Premium</h2>
                    <h2>99999</h2>
                </figure>
                <figure className="frame3">
                    <img src={gasFuel} alt=""/>
                    <h2>Diesel</h2>
                    <h2>99999</h2>
                </figure> 
            </div>
            <div className= "go-container">
                <button onclick="location.href='https://www.youtube.com/watch?v=GqysCB-EZ6g'">Vamos a ello<FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </div>
    </section>
        </section>
    );
}

export default Producto;