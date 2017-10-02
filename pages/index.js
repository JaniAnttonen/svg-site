import React from 'react';
import css from 'next/css';
import SVGText from '../components/svgtext';

const style = css({
  height: '100vh',
  '@media (max-width: 600px)': {
    background: '#3498db',
    ':hover': {
      background: '#2980b9',
    },
  },
});
 

export default () => (
    <div className={style}>
        <SVGText text="Ebin!"/>
    </div>
);
