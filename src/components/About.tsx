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
					<h1>Details</h1>
					<p className="text-justify">
						I built this website using React, which is a front-end javascript <b>library</b> developed
						by Facebook.
					</p>
				</div>
			</div>
		);
	}
}
