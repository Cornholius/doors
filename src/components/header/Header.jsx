import React from 'react';
import phone from '../../images/header/phone.svg';
import address from '../../images/header/address.svg';
import worktime from '../../images/header/worktime.svg';
import logo from '../../images/header/logo.svg';
import Menu from './Menu';

const Header = () => {

    return (
        <>
        <section className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div className="phone">
                <div className="phone__title">
                    <img className='phone__icon' src={phone} alt="phone" />
                    <span>Телефон</span>
                </div>
                <div className="phone__text">+7(999)555-55-55</div>
            </div>
            <div className="address">
                <div className="address__title">
                    <img className='phone__icon' src={address} alt="address" />
                    <span>Адрес</span>
                </div>
                <div className="address__text">г. Балашиха ул. Какая-то д.5 пав.432</div>
            </div>
            <div className="worktime">
                <div className="worktime__title">
                    <img className='phone__icon' src={worktime} alt="worktime" />
                    <span>Часы работы</span>
                </div>
                <div className="worktime__text">Пн-Пт 9:00-18:00</div>
            </div>
        </section>

        <Menu/>

        </>
    );
};

export default Header;