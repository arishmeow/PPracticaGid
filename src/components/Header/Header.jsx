import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
        <div className="logo"></div>
        
        <div className="headerTitle">
            <div className="htit">Кафе</div>
            <div className="htit">Рестораны</div>
            <div className="htit">Магазины</div>
        </div>
        <div className="HeaderBtn">
            <button className="hbtn">узнать больше</button>
        </div>
        
        </div>

    )


}

export default Header