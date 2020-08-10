import React from 'react';
import DashBoardPotter from './Potter/DashBoardPotter';
import SummarySticker from './UIcomponents/Sticker';
import SummaryGraph from './UIcomponents/SummaryGraph';
import TimePeriodSelect from './TimePeriodSelect';

export interface IProps {
    potter: DashBoardPotter
}

let potter: DashBoardPotter

const SummaryOverview = (props: IProps) => {
    potter = props.potter
    return <>
    <div className='sticker-container'>
        <SummarySticker />
        <SummarySticker />
        <SummarySticker />
    </div>
    <TimePeriodSelect potter={potter} />
    <div>
        <SummaryGraph potter={potter} />
    </div>
    </>
}
 
export default SummaryOverview;