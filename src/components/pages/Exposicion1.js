import React, { useState } from "react";
import './Exposicion1.css'
import Images from './Exposicion1Json'

export default function Exposicion1() {
    const [selectedImg, setSelectedImg] = useState(Images[0]);
    return (
        <div className='Exposicion1'>
            <h1> Leviantan el Ser y el Ego </h1>
            <div className="ImgSeleccionada">
                <img src={selectedImg} alt='selected' className='selected'></img>
            </div>
            <div className='imgContainer'>
                {Images.map((img, index) => (
                    <img
                        
                        key={index} src={img}
                        alt='Imgen no encontrada'
                        onClick={() => setSelectedImg(img)}>
                    </img>
                ))}
            </div>
        </div>
    );
}
