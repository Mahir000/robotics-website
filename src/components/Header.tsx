import React from 'react';
import {
	Navbar,
	Nav,
} from 'react-bootstrap';

interface IHeaderProps {
	changePage(page: string): void;
}
interface IHeaderState {
}
export class Header extends React.Component<IHeaderProps, IHeaderState> {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand /*href="#home"*/ onClick={ () => this.props.changePage('home') }>Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link /*href="#home"*/ onClick={ () => this.props.changePage('home') }>Home</Nav.Link>
					<Nav.Link /*href="#features"*/ onClick={ () => this.props.changePage('about') }>About</Nav.Link>
					<Nav.Link /*href="#pricing"*/ onClick={ () => this.props.changePage('contact') }>Contact</Nav.Link>
				</Nav>
				{/*
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
				*/}
			</Navbar>
		);
	}
}
