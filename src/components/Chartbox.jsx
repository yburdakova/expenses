import React from 'react';
import Monthdata from './Monthdata';
import Weekdata from './Weekdata';
import '../styles/Chartbox.css'

const Chartbox = (props) => {


    return (
        <section className='chartbox__container'>
            <Weekdata data={props.data}/>
            <Monthdata />
        </section>
    );
};

export default Chartbox;