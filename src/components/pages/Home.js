import React from 'react';
import './Home.css';
import Banner1 from './banner1.jpg';
import Ellos from './Ellos.jpg';
import Izquierda from './Izquierda.jpg';

export default function Home() {
  return (
    <div className = 'Home'>
        <div className='Carrousel'>
           <img src={Banner1} width='800px' height='350px'></img>
        </div>
        <div className='img'>
           <img className='contorno' src={Ellos} width='373px' height='320px'></img>
        </div>
        <div className='img-2'>
           <img className='contorno' src={Izquierda} width='373px' height='320px'></img>           
        </div>
        {/* <div  className='img-3'>
           <img className='contorno' src='centro.jpg' width='353px' height='300px'></img>          
        </div>
        <div className='img-4'>
           <img className='contorno' src='derecha.jpg' width='353px' height='300px'></img>
        </div> */}
    </div>
  );
}
