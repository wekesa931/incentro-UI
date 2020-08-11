import React, { useState } from 'react';
import { Tabs } from 'antd';
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

    return (
      <div className='tab-headers' style={{ margin: '1px 10px'}}>
        <Tabs defaultActiveKey="1" tabPosition={"top"}>
            <TabPane tab={"Revenue"} key={"one"}>
              <div className='graph-cont'>
                <RevenueGraph potter={potter} />
              </div>
            </TabPane>
            <TabPane tab={"Customers"} key={"two"}>
              <div className='graph-cont'>
                <CustomerGraph potter={potter} />
              </div>
            </TabPane>
            <TabPane tab={"Transactions"} key={"three"}>
              <div className='graph-cont'>
                <TransactionsGraph potter={potter} />
              </div>
            </TabPane>
        </Tabs>
      </div>
    );
  }

export default SummaryGraph;