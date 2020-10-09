import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <p className="card-title">
                This is the card title
            </p>
            <ul className="cards-list">
                <CardItem 
                    src="images/bottle-caps.jpeg"
                    text="Card 1"
                    label='Learn'
                    path='/Learn'
                />
            </ul>
        </div>
    )
}

export default Cards
