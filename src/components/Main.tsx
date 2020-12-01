import React from 'react';
import { Container } from 'react-bootstrap';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';

interface IMainProps {
	page: string;
}
interface IMainState {
}
export class Main extends React.Component<IMainProps, IMainState> {
    renderPage = (page: string) => {
        return (
            (page === 'home') ? <Home />
            : (page === 'about') ? <About /> 
            : (page === 'contact') ? <Contact /> 
            : null
        );
    }
    render() {
        return (
            <Container>
                { this.renderPage(this.props.page) }
            </Container>
        );
    }
}