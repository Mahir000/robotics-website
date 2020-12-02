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
					<div className="Frontend">
						<h3>Frontend</h3>
						<p className="text-justify">
							The frontend of this website is being made using <b>React</b> which is a
							Javascript <b>library</b> developed by Facebook. The main programming language
							I'm using for it is <b>Typescript</b> which is an extension of the Javascript
							language.
						</p>
					</div>
					<div className="Backend">
						<h3>Backend</h3>
						<p className="text-justify">
							The backend was created using Node.js and Express. Here is a link to the API I
							created: <a href="https://limitless-springs-67845.herokuapp.com/api">limitless-springs</a>.
							It's a default name...
						</p>
					</div>
				</div>
			</div>
		);
	}
}
