import React from 'react';
import door from '../../images/about/door.png'
import ekza from '../../images/collections/novella_logo_black.svg'

const Collection = (props) => {
    return(
    <div className="collections__item">
        <div className="collections__title">
            <div className="collections__text">{props.collection.text}</div>
            <img className="collections__title-pic" src={ekza} alt="about_door_pic"/>
        </div>
        <div className="collections__doors">
            <img className="collections__doors-pic" src={door} alt="about_door_pic"/>
            <img className="collections__doors-pic" src={door} alt="about_door_pic"/>
            <img className="collections__doors-pic" src={door} alt="about_door_pic"/>
            <img className="collections__doors-pic" src={door} alt="about_door_pic"/>
        </div>
    </div>
    );
};
export default Collection;