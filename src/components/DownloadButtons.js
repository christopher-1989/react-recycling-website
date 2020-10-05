import React from 'react'
import { Button } from './Button'

function DownloadButtons() {
    return (
    <div className="hero-btns">
        <p>Download the app to scan your waste</p>
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
            iOS app
            <i className="fab fa-apple" />
        </Button>
        <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
            Android app
            <i className="fab fa-android" />
        </Button>
    </div>
    )
}

export default DownloadButtons
