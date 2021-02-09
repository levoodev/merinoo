import React from "react";
import './Exposiciones.css'

export default function Exposiciones() {
    return ( <
        div className = 'Exposiciones' >
        <
        h1 > Exposiciones < /h1> <
        div className = 'Recuadros' >
        <
        a href = '/exposicion1' >
        <
        p > Leviantan el Ser y el Ego < /p> <
        /a> <
        /div>

        <
        div className = 'Recuadros' >
        <
        a href = '/exposicion2' >
        <
        p > El silencio de los significados < /p> <
        /a> <
        /div> <
        /div>
    );
}