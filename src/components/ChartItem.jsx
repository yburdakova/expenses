import React, {useState} from 'react';
import '../styles/ChartItem.css'

const ChartItem = (props) => {

    const [isShown, setIsShown] = useState(false);
    const height = props.sum * 3;

    const showHint =(e) =>{
        setIsShown(true)
    }

    const hideHint=(e) =>{
        setIsShown(false)
    }

    return (
        <div className='chartItem__container'>
            <div className='chartItem__line-container' onMouseEnter={showHint} onMouseLeave={hideHint}> 
                {isShown? <div className='chartItem__hint show-hint'>${props.sum}</div>:<div className='chartItem__hint'>${props.sum}</div>}
                {props.id === new Date().getDay()
                    ? <div className="chartItem__line today" id={props.id} style={{height:`${height}px`}}></div> 
                    : <div className="chartItem__line" id={props.id} style={{height:`${height}px`}}></div>}
            </div>
            <div className="chartItem__day">{props.day}</div>
        </div>
    );
};

export default ChartItem;
