import React from 'react';
import { Chapter } from './Chapter';

interface IHomeProps {
	faqs: {
        title: string,
        content: string[]
    }[]
}
interface IHomeState {
}
export class Home extends React.Component<IHomeProps, IHomeState> {
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
                    on members.
                </p>
                <div className="FrequentlyAskedQuestions">
                    <h2>FAQs</h2>
                    {
                        this.props.faqs.map( 
                            qna => (<Chapter key={ qna.title } title={ qna.title } content={ qna.content } />)
                        )
                    }
                </div>
            </div>
        );
    }
}
