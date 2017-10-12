import React from 'react';
import css from 'next/css';
import Vivus from 'vivus';
import SVGText from '../components/svgtext';

//TODO: https://www.goodreads.com/api

const style = css({
  width: 'auto',
  maxWidth: '100%',
  position: 'relative',
  margin: 0,
});

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default () => (
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
    <SVGText
      text={text}
      loadCallback={typeof window !== 'undefined' && new Vivus('svgText', { duration: 1000 })}
    />
  </div>
);
