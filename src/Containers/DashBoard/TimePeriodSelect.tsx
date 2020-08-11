import React, { useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import axios from 'axios';
import DashBoardPotter from './Potter/DashBoardPotter';
import { callPoint } from '../../Utility/AppStrings';
import Loader from '../../Utility/Loader';

export interface IProps {
    potter: DashBoardPotter
}
const { Option } = Select;
let potter: DashBoardPotter;

const TimePeriodSelect = (props: IProps) => {
    potter = props.potter;
    const [period, setperiod] = useState('30days')
    const [loaded, setloaded] = useState(true)

    useEffect(() => {
        getSummaryDetails()
    }, [period]);
    useEffect(() => {
        getSummaryDetails()
    }, []);

    const handleChange = async (value: string) => {
        setperiod(value)
    }
    const getSummaryDetails = async () => {
        setloaded(false)
        const instance = axios.create({
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("id_token")}
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
            if(response.status === 200){
              potter.pushToRepository({ summaryData: response.data})
              setloaded(true)
            }
        } catch(e) {
            localStorage.removeItem('id_token')
            window.location.href = '/signin';
        }
    }

    return <div className="timeline-container">
        <div className="timeline-input">
            <p className='select-period'>Select Period</p>
            <Select placeholder='Select Period' defaultValue='30days' style={{ width: 200 }} onChange={handleChange}>
                <Option value="30days">30days</Option>
                <Option value="90days">90days</Option>
                <Option value="180days">180days</Option>
                <Option value="365days">365days</Option>
            </Select>
        </div>
        <div className='summary-loader' style={{ display: `${loaded ? 'none' : 'block'}`}}>
            <Loader />
        </div>
    </div>
}
 
export default TimePeriodSelect;