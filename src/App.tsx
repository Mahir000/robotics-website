import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main';
import { Header } from './components/Header';

interface IAppProps {
}
interface IAppState {
	page: string;
}
export class App extends React.Component<IAppProps, IAppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			page: 'home'
		}
		this.changePage = this.changePage.bind(this);
	}
	changePage(page: string) {
		this.setState({page: page});
	}
	render() {
		return (
			<div className="App">
				<Header changePage={ this.changePage } />
				<Main page={ this.state.page } />
			</div>
		);
	}
}
