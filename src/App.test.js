import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';


describe('App component', () => {
	// test("render the title of app", () => {
	// 	//setup
	// 	const { getByText, getByLabelText } = render(<App/>);

		
	// 	expect(getByText("Know your Trash")).not.toBeNull();
	// 	// expect(root.querySelector("h1").textContent).toBe("Know your Trash");
	// 	// expect(root.querySelector("Navbar")).toBeDefined();
	// });
	
	describe('Navbar component', () => {
		test("render a Navbar component", () => {
			const navbar = render(<App/>, <Navbar />);
			expect(navbar).toBeDefined();
		});
	});
	
	describe('React Switch component', () => {
		test("render a Switch component", () => {
			const theSwitch = render(<Router />, <Switch />);
			expect(theSwitch).toBeDefined();
		})
		test("render a Route component that points to Home", () => {
			const theHomeRoute = render(<Router />, <Switch />, <Route path="/" exact component={Home} />
			);
			expect(theHomeRoute).toBeDefined();
		})
		test("render a Route component that points to Learn", () => {
			const theLearnRoute = render(<Router />, <Switch />, <Route path="/learn" component={Home} />
			);
			expect(theLearnRoute).toBeDefined();
		})
	})


	/*
	test("allows users to add items to their list", () => {
		const { getByText, getByPlaceholderText } = render(<App />);

		const input = getByPlaceholderText("Write something here");
		fireEvent.change(input, { target: {value: "Some entry from user"}})
		fireEvent.click(getByText("Click me"));
		const output = getByText("Some entry from user")
		const output2 = getByText("Click me")
		expect(output).not.toBeNull();
		expect(output2).not.toBeNull();
	})*/
})
