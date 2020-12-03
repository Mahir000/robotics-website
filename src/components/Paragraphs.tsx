import React from 'react';

interface IParagraphProps {
	sentences: string[]
}
interface IParagraphState {
}
export class Paragraph extends React.Component<IParagraphProps, IParagraphState> {
    render() {
        return (        
            this.props.sentences.map(
                (sentence) => (
                    <p key={ sentence[0] } className="text-justify">
                        { sentence }
                    </p>
                )
            )
        );
    }
}