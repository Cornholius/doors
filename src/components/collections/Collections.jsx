import React from 'react';
import door from '../../images/about/door.png'
import ekza from '../../images/collections/novella_logo_black.svg'


const Collections = () => {

    return (
        <section className='collections'>

            <div className="collections__item">
                <div className="collections__title">
                    <div className="collections__text">Коллекция</div>
                    <img className="collections__tiitle__pic" src={ekza} alt="about_door_pic"/>
                </div>
                <div className="collections__doors">
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                </div>
            </div>

            <div className="collections__item">
                <div className="collections__title">
                    <div className="collections__text">Коллекция</div>
                    <img className="collections__tiitle__pic" src={ekza} alt="about_door_pic"/>
                </div>
                <div className="collections__doors">
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                </div>
            </div>

            <div className="collections__item">
                <div className="collections__title">
                    <div className="collections__text">Коллекция</div>
                    <img className="collections__tiitle__pic" src={ekza} alt="about_door_pic"/>
                </div>
                <div className="collections__doors">
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                </div>
            </div>

            <div className="collections__item">
                <div className="collections__title">
                    <div className="collections__text">Коллекция</div>
                    <img className="collections__tiitle__pic" src={ekza} alt="about_door_pic"/>
                </div>
                <div className="collections__doors">
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                    <img className="collections__doors__pic" src={door} alt="about_door_pic"/>
                </div>
            </div>
        </section>
    );
};

export default Collections;