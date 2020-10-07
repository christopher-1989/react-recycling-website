import React from 'react';
import { render } from "@testing-library/react";
import Home from './Home';
import Learn from './Learn';
import App from '../../App';

describe("Home page", () => {
    
    test('includes HeroSection component', () => {
        const { container } = render(<App/>, <Home />);
        expect(container.firstChild.HeroSection).not.toBeNull();
    });
    test('includes Footer component', () => {
        const { container } = render(<App />, <Home />);
        expect(container.firstChild.Footer).not.toBeNull();
    });
});

describe("Learn page", () => {
    describe("main section", () => {
        test('renders a learn-main section in Learn component', () => {
            const frame = render(<Learn />);
            const check = document.querySelector('.learn-main');
            expect(check).not.toBeNull();
        });
    });
 
    test('includes Footer component', () => {
        const { container } = render(<App />, <Learn />);
        expect(container.firstChild.Footer).not.toBeNull();
    });
});
