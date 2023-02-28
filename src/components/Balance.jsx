import React from 'react';
import Logo from '../img/logo.png'
import '../styles/Balance.css'

const Balance = () => {
    return (
        <section className='balance__container'>
            <div className="balance__data">
                <h1 className="balance__title">My balance</h1>
                <div className="balance__amount">$921.48</div>
            </div>
            <div className="balance__logo"><img src={Logo} alt="logo"/></div>
        </section>
    );
};

export default Balance;