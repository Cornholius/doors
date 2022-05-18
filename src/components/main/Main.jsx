import React from 'react';


const Main = () => {
    return (
        <div className="main">
            <div className="callMePlz">
                <div className="callMePlz__title">Введите ваши данные и нажмите заказать звонок</div>
                <form className="callMePlz__form">
                    <input type="text" className="callMePlz__name" placeholder='Введите Ваше имя'/>
                    <input type="text" className="callMePlz__phone" placeholder='Введите телефон'/>
                    <input type="text" className="callMePlz__article" placeholder='Введите артикул'/>
                    <button type='submit' className="callMePlz__btn">ЗАКАЗАТЬ ЗВОНОК</button>
                </form>
            </div>
        </div>
    )
    
};

export default Main;