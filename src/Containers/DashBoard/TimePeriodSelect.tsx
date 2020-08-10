import React, { useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import axios from 'axios';
import DashBoardPotter from './Potter/DashBoardPotter';
import { callPoint, authToken } from '../../Utility/AppStrings';

export interface IProps {
    potter: DashBoardPotter
}
const { Option } = Select;
let potter: DashBoardPotter;

const TimePeriodSelect = (props: IProps) => {
    potter = props.potter;
    const [period, setperiod] = useState('30days')

    useEffect(() => {
        getSummaryDetails()
        console.log('yeeees')
    }, [period]);
    useEffect(() => {
        getSummaryDetails()
    }, []);

    const handleChange = async (value: string) => {
        setperiod(value)
    }
    const getSummaryDetails = async () => {
        const instance = await axios.create({
            baseURL: callPoint.ROOT_URL,
            headers: {'Authorization': 'Bearer ' + authToken}
          });
        let payload = {
            params: {
                span: period,
                client_id: localStorage.getItem("client_id")
            } 
        }
        try {
            const response = await instance.get(`${callPoint.ROOT_URL}/analytics/summary`,
            payload
            )
            console.log("TCL: getSummaryDetails -> response", response)
            if(response.status === 200){
              console.log("TCL: getSummaryDetails -> response.data", response.data)
              potter.pushToRepository({ summaryData: response.data})
            }
        } catch(e) {
            setTimeout(() => {
            }, 500);

        }
    }

    return <div className="timeline-container">
        <div className="timeline-input">
            <p>Select Period</p>
            <Select placeholder='Select Period' defaultValue='30days' style={{ width: 200 }} onChange={handleChange}>
                <Option value="30days">30days</Option>
                <Option value="90days">90days</Option>
                <Option value="180days">180days</Option>
                <Option value="365days">365days</Option>
            </Select>
        </div>
    </div>
}
 
export default TimePeriodSelect;