import React, { Component } from 'react';
import css from 'next/css';
import Vivus from 'vivus';
import SVGText from '../components/svgtext';

// TODO: https://www.goodreads.com/api

const style = css({
  width: 'auto',
  maxWidth: '100%',
  position: 'relative',
  margin: 0,
});

const name = 'Jani Anttonen';
const intro =
  'A creative mind that aims to know as much as he can of the cutting edge, currently exploring deep learning and probabilistic programming. Building software since junior high. Motivated by beauty and simplicity, is often seen zoning out coming up with new ideas. It could also just be a timeout from all the coding. Soon to be B.Sc. (CompSci)';

class Index extends Component {
  componentDidMount() {
    // const ebin = new Vivus('svgText', { duration: 1000 });
  }
  render() {
    return (
      <div className={style}>
        <style>{`
            body { 
              min-height: 100vh;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              background: #09051a;
              align-items: center;
            }
          `}</style>
        <SVGText text={name} />
        <SVGText text={intro} />
      </div>
    );
  }
}

export default Index;
