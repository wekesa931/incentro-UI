import React from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import './UIcomponents.css';

interface IProps {
    logo: HTMLElement
}

// @ts-ignore
const SummarySticker = (props: Iprops) => {

  return (
      <div className='summary-sticker'>
        <div className='logo-icon'><UnorderedListOutlined /></div>
        <div className='sticker-content'>
            <div>Customers</div>
            <div>200000</div>
        </div>
      </div>
    
  );
}

export default SummarySticker;