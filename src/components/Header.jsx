import React from 'react';
import '../styles/header.sass'
import logo from '../images/header/company_logo.svg'
import logo_text from '../images/header/doors_text.svg'


const Header = () => {
    return (
        <section className='header'>
            <img src={logo} alt="" />
        </section>
    );
};

export default Header;