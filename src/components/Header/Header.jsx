import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'


function Header({ onSearchChange, searchQuery }) {
    return (
    <div className="headerContainer">
        <Link to="/" className="logo"> </Link>
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