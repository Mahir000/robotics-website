import React from 'react';

interface IContactProps {
}
interface IContactState {
    members: {
        name: string,
        email: string
    }[]
}
export class Contact extends React.Component<IContactProps, IContactState> {
    constructor(props: any) {
        super(props);
        this.state = {
            members: []
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
    render() {
        return (
            <div className="Contact">
                <h1>Contact Us</h1>
                <div className="ContactDetails">              
                    {
                        this.state.members.map(
                            member => (
                                <div className='media' key={`${ member.name }`}>
                                    <img src="..." className="mr-3" alt="This bit's not working yet." />
                                    <div className="media-body">
                                        <h5 className="mt-0">{ member.name }</h5>
                                        <b>{ member.email }</b>
                                        <p className="text-justify">
                                            Details about us will go here.
                                        </p>
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
