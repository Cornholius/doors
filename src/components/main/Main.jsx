import React from 'react';
import bg_image from '../../images/main/main_bg.svg'

const Main = () => {
    return (
        <section className='main' style={{ backgroundImage:`url(${bg_image})`,backgroundRepeat:"no-repeat" }}>
        </section>
    );
};

export default Main;