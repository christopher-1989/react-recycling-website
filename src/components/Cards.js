import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <p className="card-title">
                Select your local council
            </p>
            <ul className="cards-list">
                <CardItem 
                    src="council-logos\city_of_port_phillip.png"
                    text="City of Port Phillip"
                    // label='Select'
                    path='/Port-Phillip'
                />
                <CardItem 
                    src="council-logos\city-of-casey.png"
                    text="City of Casey"
                    // label='Select'
                    path='/Casey'
                />
            </ul>
        </div>
    )
}

export default Cards
