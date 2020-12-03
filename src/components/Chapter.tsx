import React from 'react';
import { Paragraph } from './Paragraphs';

interface IChapterProps {
    title: string,
    content: string[]
}
interface IChapterState {
}
export class Chapter extends React.Component<IChapterProps, IChapterState> {
    render() {
        return (        
            <div className="Chapter">
                <h3>{ this.props.title }</h3>
                <Paragraph sentences={ this.props.content } />
            </div>
        );
    }
}