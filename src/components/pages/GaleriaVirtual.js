import React from "react";
import './GaleriaVirtual.css'

export default function GaleriaVirtual() {
    return (
        <div className='GaleriaVirtual'>
            <h1>Proximas Galerias Virtuales </h1>
            <div className='Recuadros'>
                <a href='/'>
                <p>Galeria 1</p>
                </a>        
            </div>
            <div className='Recuadros'>
                <p>Galeria 2</p>        
            </div>
        </div>
    );
}