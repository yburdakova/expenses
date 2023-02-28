import React from 'react';
import '../styles/Monthdata.css'
const Monthdata = () => {
    return (
        <div className='monthdata__container'>
            <h1 className="monthdata__title">Total this month</h1>
            <div className="monthdata__data">
                <div className="monthdata__sum">$478.33</div>
                <div className="monthdata__percent">
                    <div className="monthdata__percent-sum">+2.4%</div>
                    <div className="monthdata__subtitle">from last month</div>
                </div>
            </div>
        </div>
    );
};

export default Monthdata;