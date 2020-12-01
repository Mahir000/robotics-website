import React from 'react';

export class About extends React.Component {
	render() {
		return (
			<div className="About">
				<h1>About this Website</h1>
				<div className="Intro">
					<p className="lead">
						This website was made by Vimal Vinod, who refers to himself as 'I' or 'me'
						depending on the situation.
					</p>
				</div>
				<div className="Details">
					<h2>Details</h2>
					<p className="text-justify">
						This website is made using <b>React</b>, a front-end Javascript <b>library</b> developed
						by Facebook. The main programming language I used for this is <b>Typescript</b> which is
						an extension of the Javascript language.
					</p>
				</div>
			</div>
		);
	}
}
