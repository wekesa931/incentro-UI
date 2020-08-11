import React from 'react';
import './UIcomponents.css';

// @ts-ignore
const SummarySticker = (props) => {
  return (
      <div className='summary-sticker' style={{ backgroundColor: `${props.color}`}}>
        <div className='logo-icon'>{props.logo}</div>
        <div className='sticker-content'>
            <div>{props.sum}</div>
            <div>{props.name}</div>
        </div>
      </div>
    
  );
}

export default SummarySticker;