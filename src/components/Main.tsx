import React from 'react';
import { Container } from 'react-bootstrap';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';

export class Main extends React.Component<any> {
    renderPage = (page: string) => {
        return (
            (page === 'about') ? <About /> 
            : (page === 'contact') ? <Contact /> 
            : <Home />
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