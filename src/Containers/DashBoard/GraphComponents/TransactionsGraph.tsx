import React, { useEffect, useState } from 'react';
import * as configs from './config';
import LineGraph from './LineChartComponent';
import DashBoardPotter from '../Potter/DashBoardPotter';

export interface IProps {
    potter: DashBoardPotter
}

let potter: DashBoardPotter
 
const TransactionsGraph = (props: IProps) => {
    potter = props.potter;
    const [data, setdata] = useState([] as { name: string, time: number}[])
    useEffect(() => {
        let graphData = potter.context.repository.summaryData.map(dat => (
            {
                name: dat.date,
                time: dat.transactions
            }
        ))
        setdata(graphData)
    }, [potter.context.repository.summaryData]);
    return <LineGraph data={data} ylabel={'Transactions'} {...configs.SimpleLineCharts} />;
}
 
export default TransactionsGraph;