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
    constructor(props) {
        super(props);
        this.state = {
            members: []
        };
    }
    fetchData() {
        fetch("http://localhost:3000/api/members").then(
            res => res.json()
        ).then(
            res => this.setState(res)
        ).then(
            () => console.log(this.state)
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
                        this.state.members.map(member => (
                                <div className='media' key={`${ member.name }`}>
                                    <img src="..." className="mr-3" alt="This bit's not working yet." />
                                    <div className="media-body">
                                        <h5 className="mt-0">{ member.name }</h5>
                                        { member.email }
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
