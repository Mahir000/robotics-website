import React from 'react';

export class Home extends React.Component {
    images = {}
    render() {
        return (
            <div className="Home">
                <h1>The Robotics Club Website</h1>
                <p className="lead">
                    Welcome to the brand new Robotics Club Website!
                </p>
                <p className="text-justify text-danger">
                    There is no good way to say this, but the robotics club is currently very low
                    on members - like one guy turns up on good days, kind of low.
                </p>
                <div className="FrequentlyAskedQuestions">
                    <h2>FAQs</h2>
                    <div className="DateAndPlace">
                        <h3>When and where is it?</h3>
                        <p className="text-justify">
                            It's on every Friday lunchtime in Mrs Nemaura's Room (AKA
                            C1.1 or the room down the hall and to the right from the Hub).
                        </p>
                    </div>
                    <div className="FAQJoke">
                        <h3>Who even asked these questions, frequently?</h3>
                        <p className="text-justify">
                            Callum.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
