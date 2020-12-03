import React from 'react';
import { Container } from 'react-bootstrap';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';

interface IMainProps {
	page: string;
}
interface IMainState {
    members: {
        name: string,
        email: string,
        bio: string[]
    }[],
    faqs: {
        title: string,
        content: string[]
    }[]
}
export class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: any) {
        super(props);
        this.state = {
            members: [],
            faqs: []
        };
    }
    fetchData() {
        fetch("https://limitless-springs-67845.herokuapp.com/api").then(
            res => res.json()
        ).then(
            res => this.setState(res)
        )
    }
    componentDidMount() {
        this.fetchData();
    }
    renderPage = (page: string) => {
        return (
            (page === 'home') ? <Home faqs={ this.state.faqs } />
            : (page === 'about') ? <About /> 
            : (page === 'contact') ? <Contact members={ this.state.members } /> 
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