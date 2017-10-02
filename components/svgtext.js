import React from 'react';
import TextToSVG from 'text-to-svg';


export default class SVGText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            element: null
        }
    }

    componentWillMount() {
        const textToSVG = TextToSVG.loadSync();
        const attributes = this.props.attributes || {fill: '#ebebeb'};
        const options = this.props.options || {x: 0, y: 0, fontSize: 17, anchor: 'top', attributes: attributes};
        this.setState({
            element: textToSVG.getSVG(this.props.text || 'hello world!', options)
        });
    }

    render() {
        return this.state.element && (
            <div dangerouslySetInnerHTML={{__html: this.state.element}}/>
        );
    }
}
