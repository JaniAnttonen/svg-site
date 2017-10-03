import React from 'react';
import TextToSVG from 'text-to-svg';

const splitText = (text, columns) => {
  const isWhiteSpace = char => /\s/.test(char);
  const charLimit = columns || 80;
  let charInRow = 0;
  let row = '';
  const rows = [];
  for (const char of text) {
    row += char;
    charInRow += 1;
    if ((charInRow >= charLimit && isWhiteSpace(char)) || text.indexOf(char) === text.length) {
      rows.push(row);
      row = '';
      charInRow = 0;
    }
  }
  return rows;
};

export default class SVGText extends React.Component {
  constructor(props) {
    super(props);
    const textToSVG = TextToSVG.loadSync('fonts/Aadhunik.ttf');
    this.attributes = this.props.attributes || { fill: '#c0bdf0' };
    const options = this.props.options || {
      x: 0,
      y: 0,
      fontSize: 13,
      anchor: 'top',
    };
    const rows = splitText(this.props.text);
    const maxWidth = rows.reduce((a, b) => Math.max(textToSVG.getMetrics(a, options).width, textToSVG.getMetrics(b, options).width));
    const totalHeight = rows.map((text) => textToSVG.getMetrics(text, options).height).reduce((a, b) => a + b + options.fontSize, 0);
    this.state = {
      paths: rows.map((row, index) => {
        options.y = index > 0 ? options.y + options.fontSize * 2 : options.y;
        return textToSVG.getD(row, options);
      }),
      svgWidth: maxWidth,
      svgHeight: totalHeight,
    };
    this.pathElems = [];
  }

  render() {
    return (
      this.state.paths && (
        <svg
          ref={elem => (this.svg = elem)}
          width={this.state.svgWidth}
          height={this.state.svgHeight} 
        >
            {this.state.paths.map((path, index) => {
                this.pathElems.push(`row${index}`);
                return <path d={path} fill={this.attributes.fill} id={`row${index}`} key={`row${index}`} />
            })}
        </svg>
      )
    );
  }
}
