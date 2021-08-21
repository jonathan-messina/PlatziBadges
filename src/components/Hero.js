import React from 'react'
import "../styles/BadgeNew.css"
import Header from '../images/badge-header.svg'

class Hero extends React.Component {
    render() {
        return (
            <div className="BadgeNew__hero" >
                <img className="img-fluid" src={Header} alt="Logo" />
            </div>
        )
    }
}

export default Hero;

