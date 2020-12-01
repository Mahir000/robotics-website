import React from 'react';

export class Contact extends React.Component {
    clubMembers = [
        {
            name: "Vimal Vinod",
            email: "vvinod@wigstonstudents.org"
        }
    ]
    render() {
        return (
            <div className="Contact">
                <h1>Contact Us</h1>
                <div className="ContactDetails">
                    {
                        this.clubMembers.map(member => (
                                <div className={`media ${member.name}`}>
                                    <img src="..." className="mr-3" alt="This bit's not working yet." />
                                    <div className="media-body">
                                        <h4 className="mt-0">{ member.name }</h4>
                                        <h5>{ member.email }</h5>
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
