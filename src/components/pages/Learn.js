import React from 'react'
import Cards from '../Cards';
import Footer from '../Footer';

function Learn() {
    return (
        <>
            <div className='main-container'>
                <div className="learn-main">
                    <h1>Learn about recycling in your area</h1>
                    <Cards />
                </div>
            </div>
            <Footer /> 
        </>
    )
}

export default Learn
