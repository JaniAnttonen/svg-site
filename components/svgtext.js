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
    if ((charInRow >= charLimit && isWhiteSpace(char)) || row.length === text.length) {
      rows.push(row);
      row = '';
      charInRow = 0;
    }
  }
  return rows;
};

export default class SVGText extends React.Component {
  componentWillMount() {
    const textToSVG = TextToSVG.loadSync('fonts/Aadhunik.ttf');
    this.attributes = this.props.attributes || { fill: '#c0bdf0' };
    const options = this.props.options || {
      x: 0,
      y: 0,
      fontSize: 13,
      anchor: 'top',
    };
    const rows = splitText(this.props.text);
    const maxWidth =
      rows.length > 0
        ? rows.length === 1
          ? textToSVG.getMetrics(rows[0], options).width ||
            rows.reduce((a, b) =>
              Math.max(
                textToSVG.getMetrics(a, options).width,
                textToSVG.getMetrics(b, options).width
              )
            )
          : 0
        : 0;
    const totalHeight = rows
      .map(text => textToSVG.getMetrics(text, options).height)
      .reduce((a, b) => a + b + options.fontSize, 0);
    this.setState({
      paths: rows.map((row, index) => {
        options.y = index > 0 ? options.y + options.fontSize * 2 : options.y;
        return textToSVG.getD(row, options);
      }),
      svgWidth: maxWidth,
      svgHeight: totalHeight,
    });
  }

  render() {
    return (
      this.state.paths &&
      this.state.svgWidth > 0 &&
      this.state.svgHeight > 0 && (
        <svg className="svgText" width={this.state.svgWidth} height={this.state.svgHeight}>
          {this.state.paths.map((path, index) => (
            <path d={path} fill={this.attributes.fill} id={`row${index}`} key={`row${index}`} />
          ))}
        </svg>
      )
    );
  }
}
