import React from 'react'
import './HeroSection.css'
import SliderButton from './SliderButton'


function HeroSection() {
    return (
        <>
            <div className="HeroSection-container">
                <h2>Do you Know Your Trash?</h2>
                <p>Educate yourself on your waste</p>
            </div>
            <SliderButton/>
        </>
    )
}

export default HeroSection
