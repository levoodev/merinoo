import React from "react";
import './Contacto.css'

export default function Contacto() {
    return (
        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <form action="">
                    <p>
                        <p>
                            <label>Nombre Completo</label>
                            <input type="text" name="fullname"></input>
                        </p>
                        <p>
                            <label>Cargo</label>
                            <input type="text" name="fullname"></input>
                        </p>
                        <p>
                            <label>Empresa</label>
                            <input type="text" name="fullname"></input>
                        </p>
                        <p>
                            <label>Giro de tu empresa</label>
                            <input type="text" name="fullname"></input>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email" name="email"></input>
                        </p>
                        <p>
                            <label>Numero de telefono</label>
                            <input type="tel" name="phone"></input>
                        </p>
                       
                        <p class="block">
                            <label>Mensaje</label>
                            <textarea name="message" rows="3"></textarea>
                        </p>
                        <p class="block">
                            <button>
                                Enviar
                        </button>
                        </p>
                    </p>
                </form>
                <div class="contact-info">                   
                    <ul>                       
                        <li><i class="fas fa-user-friends"></i> Lic. Laura Jiménez</li>
                        <li><i class="fab fa-whatsapp-square"></i>  (+52) 55 1293 0996</li>
                        <li><i class="fas fa-envelope-open-text"></i>  jimenez@merinoo.com.mx</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}