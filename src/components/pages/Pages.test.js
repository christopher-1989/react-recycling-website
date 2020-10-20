import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Home from './Home';
import { Router } from 'react-router';
import Learn from './Learn';
import App from '../../App';
import { createMemoryHistory } from 'history'
import Port from './Port';
import Casey from './Casey';
import Offsite from './Offsite';
import Blog from './Blog';

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
		    expect(getByText("Learn about recycling in your area")).not.toBeNull();
        });
        
        describe("Cards list", () => {
            test("renders cards component", () => {            
                expect(document.querySelector('.cards')).not.toBeNull();
            })

            test('renders a cards-list', () => {
                expect(document.querySelector('.cards-list')).not.toBeNull();
              })

            describe("Cards list items", () => {
                test("renders port phillip card list item", () => {
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
                    expect(getByText("City of Port Phillip")).not.toBeNull();
                });

                test("renders Casey card list item", () => {
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
                    expect(getByText("City of Casey")).not.toBeNull();
                });
                
                // test("card has an image", () => {
                //     const check = document.querySelector('.cards__item__img');
                //     expect(check).not.toBeNull();
                // });
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
        render(
          <Router history={history}>
            <Learn />
          </Router>
        )
        //verify
        const check = document.querySelector('.Footer')
        expect(check).not.toBeNull();
    });
}); 

describe("Port Phillip page", () => {
    describe("main section", () => {
        let history = null;
        let route = null;
        
        beforeEach(() => {
            //setup
            history = createMemoryHistory()
            route = '/Port'
            history.push(route)
            //exercise
            render(
              <Router history={history}>
                <Port />
              </Router>
            )
        });

        test('renders a learn-main section in Port component', () => {
            //verify
            expect(document.querySelector('.learn-main')).not.toBeNull();
        });

        test('renders an iframe poster in Port component', () => {
            //verify
            expect(document.querySelector('.recycling-poster')).not.toBeNull();
        });
    });
});

describe("Casey council page", () => {
    describe("main section", () => {
        let history = null;
        let route = null;
        
        beforeEach(() => {
            //setup
            history = createMemoryHistory()
            route = '/Casey'
            history.push(route)
            //exercise
            render(
              <Router history={history}>
                <Casey />
              </Router>
            )
        });  

        test('renders a learn-main section in Casey component', () => {
            //verify
            expect(document.querySelector('.learn-main')).not.toBeNull();
        });

        test('renders an iframe poster in Casey component', () => {
            //verify
            expect(document.querySelector('.recycling-poster')).not.toBeNull();
        });
    });
});

describe("Offsite page", () => {
    test('Renders offsite intermediate page', () => {
    //setup
    const history = createMemoryHistory()
    const route = '/offsite'
    //exercise
    history.push(route)
    const { getByText } = render(
                                <Router history={history}>
                                    <Offsite />
                                </Router>
                                )
    //verify
    expect(getByText("You are now leaving this site")).not.toBeNull();
    });
});

describe("Blog page", () => {
    test('Renders blog page', () => {
        const history = createMemoryHistory();
        const route = '/blog';

        history.push(route);
        const { getByText } = render(
                                <Router history ={history}>
                                    <Blog />
                                </Router>
        )
        expect(getByText("Blog")).not.toBeNull();
    })
})