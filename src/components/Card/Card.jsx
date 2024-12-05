import React, { useState } from 'react';
import './Card.css';
import styles from './Card.css'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const itemsPerPage = 5;

function EstablishmentList({establishments}) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); 
    };

    const filteredEstablishments = establishments.filter((establishment) => {
        const nameLower = establishment.name.toLowerCase(); 
        const queryLower = searchQuery.toLowerCase();
        return nameLower.includes(queryLower) && (!selectedCategory || establishment.category === selectedCategory);
    });


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEstablishments = filteredEstablishments.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredEstablishments.length / itemsPerPage);

const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
};

const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
    }
};

    return (
        
    <div className='body'>
        <div className='Header'>
        <Header onSearchChange={handleSearchChange} 
        searchQuery={searchQuery} /> {}
        </div>    
<div className='Container'>
    <div className='filter'>
        <select className='ChooseCategory' 
        value={selectedCategory} 
        onChange={handleCategoryChange}>
        <option value="">Все</option>
        <option value="Кафе">Кафе</option>
        <option value="Ресторан">Ресторан</option>
        <option value="Магазин">Магазин</option>
        </select>
    </div>
    <div className='cards'>
        {currentEstablishments.map((establishment) => (
            <div className="card" key={establishment.id}>
            <div className="card_img" >
                <img src={establishment.ImgCard} width={220} ></img>
            </div>
            <div className="cardText">
            <div className="cardTitle">{establishment.name}</div>
            <div className="cardDes">{establishment.description}</div>
            <Link to={`/establishments/${establishment.id}`} className="cardMore">Подробнее</Link>
            </div>
            </div>
            ))}
    </div>
    </div>
    <div className='Paginate'>
        <button className="paginationButton" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Назад
        </button>
        {[...Array(totalPages)].map((_, i) => (
            <button 
            key={i}
        onClick={() => paginate(i + 1)}
        className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.active : ''}`}>
        {i + 1}
            </button>
        ))}
        <button className="paginationButton" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            Вперед
        </button>
    </div>
    
</div>
    );
}

export default EstablishmentList;