import React from 'react';
import Link from 'next/link';
import css from 'next/css';
import TextToSVG from 'text-to-svg';

const textToSVG = TextToSVG.loadSync();

const style = css({
  height: '100vh',
  '@media (max-width: 600px)': {
    background: '#3498db',
    ':hover': {
      background: '#2980b9',
    },
  },
});
 
const attributes = {fill: 'red', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

export default () => (
    <div className={style}>
        Home:<Link href="/about">About</Link>
        {textToSVG.getSVG('hello', options)}
    </div>
);
