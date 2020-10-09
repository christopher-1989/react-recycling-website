import React from 'react';
import { render, getByText, screen, getByTestId, cleanup } from "@testing-library/react";
import Home from './Home';
import { MemoryRouter, Router } from 'react-router';
import Learn from './Learn';
import App from '../../App';
import Cards from '../Cards';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { unmountComponentAtNode } from 'react-dom';

describe("Home page", () => {
    beforeEach(() => {
        //setup DOM
        render(<App/>, <Home />);
    });

    test('includes HeroSection component', () => {
        const tocheck = document.querySelector(".HeroSection-container")
        expect(tocheck).not.toBeNull();
    });
    
    test('includes Footer component', () => {
        const tocheck = document.querySelector(".Footer");
        expect(tocheck).not.toBeNull();
    });
});

describe("Learn page", () => {
    describe("main section", () => {
        let history = null;
        let route = null;
        
        beforeEach(() => {
            //setup
            history = createMemoryHistory()
            route = '/learn'
            history.push(route)
            //exercise
            render(
              <Router history={history}>
                <Learn />
              </Router>
            )
        })
        // afterEach(() => {
        //     history = null;
        //     route = null;
        // });


        test('renders a learn-main section in Learn component', () => {
            //verify
            expect(document.querySelector('.learn-main')).not.toBeNull();
        })

        test("render the h1 in learn-main", () => {
            cleanup();
            //different setup to majority
            const history = createMemoryHistory()
            const route = '/learn'
            //exercise
            history.push(route)
            const { getByText } = render(
                                        <Router history={history}>
                                            <Learn />
                                        </Router>
                                        )
            //verify
		    expect(getByText("Learn")).not.toBeNull();
        });
        
        describe("Cards list", () => {
            test("renders cards component", () => {            
                expect(document.querySelector('.cards')).not.toBeNull();
            })

            test('renders a cards-list', () => {
                expect(document.querySelector('.cards-list')).not.toBeNull();
              })

            describe("Cards list items", () => {
                test("renders one card list item", () => {
                    const check = document.querySelector('.cards__item');
                    expect(check).not.toBeNull();
                });

                test("card has a title", () => {
                    const check = document.querySelector('.card-title');
                    expect(check).not.toBeNull();
                });
                
                test("card has an image", () => {
                    const check = document.querySelector('.cards__item__img');
                    expect(check).not.toBeNull();
                });
            })



        });

    });
 
    test('includes Footer component', () => { 
        //setup
        let route = null;
        let history = null;
        history = createMemoryHistory()
        route = '/learn'
        history.push(route)
        //exercise
        const { getByText } = render(
          <Router history={history}>
            <Learn />
          </Router>
        )
        //verify
        const check = document.querySelector('.Footer')
        expect(check).not.toBeNull();
    });
}); 