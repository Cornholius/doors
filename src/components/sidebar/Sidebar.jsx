import React from 'react';
import pos_pic from '../../images/sidebar/pos.svg'
import CompanyLogo from './CompanyLogo';
import { Link, Outlet } from 'react-router-dom';


const Sidebar = () => {
    let date = new Date()

    return (
        <>
        <section className='sidebar'>
            <CompanyLogo/>
            <ul className="menu">
                <li className="menu__item"><Link to='/home' className='menu__text'>На главную</Link></li>
                <li className="menu__item"><Link to='/home' className='menu__text'>Коллекции</Link></li>
                <li className="menu__item"><Link to='/home' className='menu__text'>Где купить</Link></li>
                <li className="menu__item"><Link to='/home' className='menu__text'>Гарантия</Link></li>
                <li className="menu__item"><Link to='/about' className='menu__text'>О компании</Link></li>
            </ul>
            <div className="sidebar__bottom">
                <div className="date">
                    <span className="date__day">{date.getDate()}</span>
                    <span className="date__mouth_year">{date.getMonth()} | {date.getFullYear()}</span>
                </div>
                <div className="position">
                    <img className='position__pic' src={pos_pic} alt="position_pic" />
                    <span className='position__text'>Балашиха (хочешь уехать? учи язык)</span>
                </div>
            </div>
        </section>
        <div className="content">
            <Outlet/>
        </div>
        </>
    );
};

export default Sidebar;