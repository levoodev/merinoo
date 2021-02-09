import React from 'react';
import './Footer.css';
import Plastica from './PlasticaMexicana.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='logo'>
     
      </div>
      <div className='center'>
        <h1>La constante de Proponer</h1>
      </div>
      <div className='box'>
      <img src={Plastica} width='110px' height='80px'></img>
        <p>Miembro Activo del Salón de la Plástica Mexicana</p>
      </div>
    </div>
  );
}
