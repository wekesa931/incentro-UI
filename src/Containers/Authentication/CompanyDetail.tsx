import React from 'react';
import logo from '../../assets/logo.png'
 
const CompanyDetail = () => {
    return <div className='company-details'>
        <div className='image-logo'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='company-name'>
            <p>Conduit Technologies</p>
        </div>
    </div>
}
 
export default CompanyDetail;