import React from 'react';
import door from '../../images/about/door.png'

const About = () => {
    return (
        <section className='about'>
            <div className="about__column1">
                <div className="about__title">
                    Фабрика межкомнатных дверей Юкка
                </div>
                <div className="about__text">
                    Межкомнатные двери «Юкка» с покрытием ПВХ-пленкой, предназначенные для жилых, гостиничных и офисных помещений, известны на рынке с 2003 года. Они представлены в широком разнообразии решений, которые отличаются по стилю, конструкции и цветовой гамме. Практически любая модель может быть изготовлена с учетом пожеланий покупателя (разумеется, в рамках вариантов решений, доступных для конкретной модели).
                </div>
                <div className="about__text">
                    Современное производственное оборудование и оптимальная организация технологических процессов в совокупности с применением экологичных материалов и высоким профессионализмом специалистов позволяют выпускать качественный продукт.
                </div>
            </div>
            <div className="about__column2">
                <img className="about__pic" src={door} alt="about_door_pic"/>
                {/* <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/>
                <img className="about__pic" src={door} alt="about_door_pic"/> */}

            </div>
        </section>
    );
};

export default About;