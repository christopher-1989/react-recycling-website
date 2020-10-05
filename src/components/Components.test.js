import React from 'react'
import { render, getByText } from '@testing-library/react'
import Home from './pages/Home'
import App from '../App'
import Navbar from './Navbar'
import DownloadButtons from './DownloadButtons'



describe('Hero section', () => {

    test('renders h1 that has text "Do you know your trash?"', () => {
        const { getByText } = render(<App/>, <Home/>);
        expect(getByText("Do you know your trash?")).not.toBeNull();
    })
    test('renders p that has text "Educate yourself on your waste"', () => {
        const { getByText } = render(<App/>,<Home/>);
        expect(getByText("Educate yourself on your waste")).not.toBeNull();
    })

}) 
 
describe('Navbar', () => {
    test('renders Home button in navbar logo', () => {
        const { getByText } = render(<App/>,<Navbar />);
        expect(getByText("KYT")).not.toBeNull();
    })
    test('renders a navbar menu list', () => {
        const frame = render(<App/>,<Navbar/>);
        const check = document.querySelector('.nav-menu');
        expect(check).not.toBeNull();
    })
    describe('Navbar menu list', () => {
        test('renders a Home button', () => {
            const { getByText } = render(<App/>,<Navbar/>);
            expect(getByText("Home")).not.toBeNull();
        });
        test('renders a Learn button', () => {
            const { getByText } = render(<App/>,<Navbar/>);
            expect(getByText("Learn")).not.toBeNull();
        });
    }) 

}) 

describe("DownloadButtons", () => {
    test('renders p that has text "Download the app to scan your waste"', () => {
        const { getByText } = render(<App/>,<Home/>,<DownloadButtons/>);
        expect(getByText("Download the app to scan your waste")).not.toBeNull();
    }) 
    test('renders download IPHONE app button', () => {
        const { getByText } = render(<App/>,<Home/>,<DownloadButtons/>);
        expect(getByText("iOS app")).not.toBeNull();
    })
    test('renders download ANDROID app button', () => {
        const { getByText } = render(<App/>,<Home/>,<DownloadButtons/>);
        expect(getByText("Android app")).not.toBeNull();
    })
})