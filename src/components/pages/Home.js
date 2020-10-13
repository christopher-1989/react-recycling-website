import React from 'react'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import DownloadButtons from '../DownloadButtons'

function Home() {
    return (
        <>
            <HeroSection />
            <div id="home-main" className="main-container">
                <div className="bg-image"></div>
                <main className="main">
                    <h1 className="firstLine">Be part of the </h1>
                    <h1 className="secondLine">recycle-reuse-reduce revolution</h1>
                    <DownloadButtons/>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Home
