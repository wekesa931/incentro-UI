import React from 'react';
import { HomeOutlined, WechatOutlined, MailOutlined, CalendarOutlined, LogoutOutlined } from '@ant-design/icons';
import whiteLogo from '../../../assets/white-logo.png'

export interface IProps {
    
}
 
const NavigationComponents = () => {
    return <>
    <div className="side-img">
        <img src={whiteLogo} alt="logo"/>
    </div>
    <div className='nav-components'>
        <div>
            <div className="side-item">
                <HomeOutlined />
                <p>Home</p>
            </div>
            <div className="side-item">
                <WechatOutlined />
                <p>Chat</p>
            </div>
            <div className="side-item">
                <MailOutlined />
                <p>Email</p>
            </div>
            <div className="side-item">
                <CalendarOutlined />
                <p>Calendar</p>
            </div>
        </div>
        <div className="side-item" onClick={() => {
            localStorage.removeItem('id_token')
            window.location.href = '/signin';
        }}>
            <LogoutOutlined />
            <p>Log Out</p>
        </div>
    </div>
    </>
}
 
export default NavigationComponents;