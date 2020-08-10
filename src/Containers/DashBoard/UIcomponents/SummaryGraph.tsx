import React, { useState } from 'react';
import { Tabs, Radio } from 'antd';
import RevenueGraph from '../GraphComponents/RevenueGraph';
import DashBoardPotter from '../Potter/DashBoardPotter';
import CustomerGraph from '../GraphComponents/CustomerGraph';
import TransactionsGraph from '../GraphComponents/TransactionsGraph';

const { TabPane } = Tabs;

interface IProps {
    potter: DashBoardPotter;
}
let potter: DashBoardPotter;

const SummaryGraph = (props: IProps) => {
    potter = props.potter
    const [mode, setmode] = useState("top")

    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={"top"}>
            <TabPane tab={"one"} key={"one"}>
              <RevenueGraph potter={potter} />
            </TabPane>
            <TabPane tab={"two"} key={"two"}>
                <CustomerGraph potter={potter} />
            </TabPane>
            <TabPane tab={"three"} key={"three"}>
                <TransactionsGraph potter={potter} />
            </TabPane>
        </Tabs>
      </div>
    );
  }

export default SummaryGraph;