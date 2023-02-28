import React from 'react';
import ChartItem from './ChartItem';
import '../styles/Weekdata.css'

const Weekdata = (props) => {

    return (
        <div className='weekdata__container'>
            <div className="weekdata__title">Spending - Last 7 days</div>
            <div className="weekdata__chart">
                {props.data.map((item,i) => <ChartItem key={i} id ={i+1} day={item.day} sum={item.amount}/>)}
            </div>
        </div>
    );
};

export default Weekdata;