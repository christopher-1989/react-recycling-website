import React from 'react'
import './HeroSection.css'
import SliderButton from './SliderButton'


function HeroSection() {
    return (
        <>
            <div className="HeroSection-container">
                <h1>Do you Know Your Trash?</h1>
                <h2>Educate yourself on your waste</h2>
            </div>
            <SliderButton/>
        </>
    )
}

export default HeroSection
