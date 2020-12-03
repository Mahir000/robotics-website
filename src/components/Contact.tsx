import React from 'react';
import { Paragraph } from './Paragraphs';

interface IContactProps {
    members: {
        name: string,
        email: string,
        bio: string[]
    }[]
}
interface IContactState {
}
export class Contact extends React.Component<IContactProps, IContactState> {
    members = this.props.members;
    render() {
        return (
            <div className="Contact">
                <h1>Contact Us</h1>
                <div className="ContactDetails">              
                    {
                        this.members.map(
                            member => (
                                <div className='media' key={`${ member.name }`}>
                                    {/* <img src="..." className="mr-3" alt="This bit's not working yet." /> */}
                                    <div className="media-body">
                                        <h4 className="mt-0">{ member.name }</h4>
                                        <h5>Email:</h5>
                                        <p>
                                            <b>{ member.email }</b>
                                        </p>
                                        <h5>Bio:</h5>
                                        <Paragraph sentences={ member.bio } />
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}
