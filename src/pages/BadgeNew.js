
import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import '../styles/BadgeNew.css'


const BadgeNew = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    })
    //user se alimenta de handleChange, es decir, al haber un cambio, las props por medio de handlechange, se transfieren a user, que es el state.

    const handleChange = e => {
        // e hace referencia al evento que ocurrio
        setUser({
            ...user,
            // ... es el operador spread, trae todos los datos de user, es como copiar y pegar todos los datos
            [e.target.name]: e.target.value
            // almacenamos dentro de el estado la informacion del formulario, con nombre y valor, target es una señalador por defecto de react
        });
    };
    return <div>
        <Navbar />
        <Hero />
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge
                        firstName={user.firstName}
                        lastName={user.lastName}
                        twitter={user.twitter}
                        jobTitle={user.jobTitle}
                        gravatar={user.gravatar}
                    />
                </div>
                <div className="col-6">
                    <BadgeForm onChange={handleChange} formData={user} />
                </div>
            </div>
        </div>
    </div>;
}


export default BadgeNew;


