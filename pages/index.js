import React from 'react';
import css from 'next/css';
import SVGText from '../components/svgtext';

const style = css({
    width: 'auto',
    maxWidth: '100%',
    position: 'relative',
    margin: 0
});

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const splitText = () => {
    const isWhiteSpace = char => /\s/.test(char)
    const charLimit = 80;
    let charInRow = 0;
    let row = '';
    let rows = [];
    for(let char of text) {
        row += char;
        charInRow += 1;
        if((charInRow>=charLimit && isWhiteSpace(char)) || text.indexOf(char)===text.length) {
            rows.push(row);
            row = '';
            charInRow = 0;
        }
    }
    return rows;
}

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
        {splitText().map((row, index) =>
            <SVGText text={row} key={`row${index}`}/>
        )} 
    </div>
);
