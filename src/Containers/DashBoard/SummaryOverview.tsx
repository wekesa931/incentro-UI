import React from 'react';
import { LineChartOutlined, TeamOutlined, DollarOutlined } from '@ant-design/icons';
import DashBoardPotter from './Potter/DashBoardPotter';
import SummarySticker from './UIcomponents/Sticker';
import SummaryGraph from './UIcomponents/SummaryGraph';
import TimePeriodSelect from './TimePeriodSelect';
import { calculateSum, thousandSeparator, thousandDivider } from './DashboardHelper';

export interface IProps {
    potter: DashBoardPotter
}

let potter: DashBoardPotter

const SummaryOverview = (props: IProps) => {
    potter = props.potter

    let summary = potter.context.repository.summaryData
    return <>
    <div className='sticker-container'>
        <SummarySticker name={"Revenue"} color={'#71bd1d'} logo={<DollarOutlined />} sum={thousandSeparator(calculateSum(summary, 'revenue'))} />
        <SummarySticker name={"Customer"} color={'#0068d4'} logo={<TeamOutlined />} sum={thousandDivider(calculateSum(summary, 'customers'))}/>
        <SummarySticker name={"Transactions"} color={'#f75d81'} logo={<LineChartOutlined />} sum={thousandDivider(calculateSum(summary, 'transactions'))}/>
    </div>
    <TimePeriodSelect potter={potter} />
    <div>
        <SummaryGraph potter={potter} />
    </div>
    </>
}
 
export default SummaryOverview;