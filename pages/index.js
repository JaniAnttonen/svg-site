import React from 'react';
import css from 'next/css';
import SVGText from '../components/svgtext';

const style = css({
    height: '100vh',
    background: '#09051a',
    margin: 0
});
 

export default () => (
    <div className={style}>
        <style>{`
          body { 
            margin:0;
            padding:0;
          }
        `}</style>
        <SVGText text="Ebin!"/>
    </div>
);
