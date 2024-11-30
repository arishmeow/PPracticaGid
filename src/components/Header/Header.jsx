import React from "react";
import './Header.css'


function Header({ onSearchChange, searchQuery }) {
    return (
    <div className="headerContainer">
        <div className="logo"></div>
        <div className="search-bar"> 
        <input className="search"
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={onSearchChange}
        />
        </div>
        <div></div>
    </div>
    )
}

export default Header