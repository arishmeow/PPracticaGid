import React, { useState } from 'react';
import './Card.css';
import styles from './Card.css'
import Header from '../Header/Header';

const establishments = [
    { id: 1,
    ImgCard:'https://sun9-10.userapi.com/impf/c639120/v639120567/292b6/6X9tJa_1QdA.jpg?size=299x299&quality=96&sign=f4180015ff138a1d1f4377f7988ca4a5&type=album',
    name: 'Чайхана «Сказка»', 
    category: 'Ресторан', 
    description: 'Деловая встреча, романтический вечер, семейный ужин или посиделки в кругу друзей… Осталось только забронировать столик в комплексе «Сказка». Уникальный ресторан восточной, итальянской и японской кухонь расположился в самом сердце Великого Новгорода.' },
    
    { id: 2, 
    ImgCard:'https://sun9-6.userapi.com/impg/f3j3ZH-ou09r_Ujp8_LiEXEDSsaPkYf8XHmfhQ/rE-pv_gMe9k.jpg?size=833x833&quality=95&sign=95bcf47eb9d5ca096e40ebc16b88c253&type=album ',
    name: 'MARUSYA RESTAURANT',
    category: 'Ресторан', 
    description: 'Вас ждут интересные сочетания ингредиентов, обширная барная карта и разнообразное меню.' },
    
    { id: 3,
    ImgCard:'https://sun9-33.userapi.com/impg/c858124/v858124072/f5b19/fb6yRp9P4U8.jpg?size=1280x1280&quality=96&sign=47f8aa9b9a32d516d7ad0055b953ef31&type=album ', 
    name: 'ЧАРОДЕЙКА-бар', 
    category: 'Ресторан', 
    description: 'Уникальное место вне времени с душевным сервисом и гастрономией, где можно не только сытно поесть, но и насладиться видом из окна.' },
    
    { id: 4, 
    ImgCard:'https://sun9-68.userapi.com/impg/2CBinVLxLdZsmXGvveEp83qvNdd4oQgmXP88sA/FYykee_LA5k.jpg?size=500x500&quality=96&sign=1de31bd16d55ffe528781c4db5b016d1&type=album',
    name: 'Ресторан География', 
    category: 'Ресторан', 
    description: 'Меню ресторана, в котором мы собрали много интересных и ярких блюд разных стран - Италия, Франция, Россия, Европа. Посещение этого ресторана практически путешествие по понятным и знакомым, или наоборот, по неизведанным и загадочным местам.' },
    
    { id: 5, 
    ImgCard:'https://sun9-46.userapi.com/impf/c831508/v831508915/5922c/BI0vLoTfysU.jpg?size=1080x1080&quality=96&sign=39da2983b57f0da31119e4553cec6632&type=album ',
    name: 'Hurma restaurant', 
    category: 'Ресторан', 
    description: 'Эффективное сочетание ресторанной, барной и lounge-концепций, близкая каждому кухня и неповторимый дизайн с отличным панорамным видом' },
    
    { id: 6,
    ImgCard:'https://sun9-27.userapi.com/impg/3d8hCcmlMJBt69O3TrI9-R8gjJ4u0GBvRtASWA/l7KtDCwiofU.jpg?size=1280x1280&quality=95&sign=ef5f3ee6e04bfddc1c0fbc66da164f41&type=album ',     
    name: 'MY KITCHEN', 
    category: 'Ресторан', 
    description: 'Здесь можно найти любимые блюда итальянской, русской, японской кухонь в новом прочтении, а также популярной грузинской. Прекрасное место для делового обеда, романтического вечера, семейного ужина или встречи с друзьями!' },
    
    { id: 7, 
    ImgCard:'https://sun9-52.userapi.com/impg/RbvMT11zYYzUmg-_p734V4-xwfAIfni8wLChnw/ShTtkbvbvFE.jpg?size=898x1080&quality=95&sign=119de01ba1eae804f109de5823a7bbf8&type=album ',
    name: 'WELCOME', 
    category: 'Кафе', 
    description: 'Европейская кухня, блюда с печи, большой ассортимент блюд с мангала.' },
    
    { id: 8, 
    ImgCard:'https://sun9-79.userapi.com/impg/n9trHwaTHipWpqOTyjrVXTrSsq0IAXQ_Av0Tsw/S4pT3FQLvRE.jpg?size=1080x1080&quality=96&sign=14824ec84c2858d136d8ebe0762ca1b4&type=album ',
    name: 'СУДАРУШКА', 
    category: 'Кафе', 
    description: 'Уютное кафе с домашней кухней в историческом центре Великого Новгорода.' },
    
    { id: 9, 
    ImgCard:'https://sun9-18.userapi.com/impf/c845521/v845521973/e1cf/PLPNeBxlqUA.jpg?size=500x500&quality=96&sign=5e357899da0beab0d7c0baa8f8fc5a3d&type=album ',
    name: 'Café le Chocolat', 
    category: 'Кафе', 
    description: 'Увлекательная гастрономическая игра вкусов и ароматов, изысканные десерты ручной работы, авторская карта коктейлей и подача настоящего русского алкоголя от старейшего завода "Алкон".' },
    
    { id: 10, 
    ImgCard:'https://sun9-76.userapi.com/impf/pPaD9sjj16-Bc82t7dtjb2Oz-Jz1lCbrkUr3fw/Sm05ZjJq4Zw.jpg?size=851x851&quality=96&sign=366da27ed88ecf067df15d0f6c74a481&type=album ',
    name: 'ХочуТорт', 
    category: 'Кафе', 
    description: 'Уютное, семейное кафе, где Вы всегда можете насладиться чудесным кофе, шикарными десертами от нашей кондитерской, вкусной кухней и нашим милым интерьером в самом центре Великого Новгорода!' },
    
    { id: 11,
    ImgCard:'https://sun9-1.userapi.com/impg/oJR-vfCCObdQpZWD64kkQ82xAwcxtD1JU-P0Dg/446qK_am1oU.jpg?size=769x769&quality=95&sign=475ccf2c5dc0ba7579fe9c8607fca013&type=album ', 
    name: 'ВкусВилл', 
    category: 'Магазин', 
    description: 'Магазин вкусных и полезных продуктов с честным составом.' },
    
    { id: 12, 
    ImgCard:'https://sun9-71.userapi.com/impg/C7eCXlQOWS7wF1Jr6PyuL1tLLlL_typB15w1oQ/9QlRzwTfnyI.jpg?size=1080x1080&quality=95&sign=09dbd0e4693bce7ccc63568399e6f0f0&type=album ',
    name: 'Магнит', 
    category: 'Магазин', 
    description: 'Семья магазинов Магнит — это более 20 000 магазинов для ежедневных покупок каждой российской семьи.' },
    
    { id: 13, 
    ImgCard:'https://sun9-41.userapi.com/impg/qO9WLJmDkezZj0CapsTXyDBj7PzfL_D9JC8xEA/KT2VSpceid8.jpg?size=1080x1080&quality=95&sign=143ba936e1c14c1182ddc58a4bacea42&type=album ',
    name: 'Улыбка радуги', 
    category: 'Магазин', 
    description: 'Уход за собой и домом' },
    
    { id: 14, 
    ImgCard:'https://tmk-grinn.ru/wp-content/uploads/2024/06/1643605893_8-papik-pro-p-dns-logotip-8-be54e2c0eaba18ef70c4b4b7bcc57d5a-1.png ',
    name: 'DNS', 
    category: 'Магазин', 
    description: 'Сеть магазинов цифровой и бытовой техники DNS – это всегда широкий выбор и низкие цены!' },
    
    { id: 15, 
    ImgCard:'https://sun9-28.userapi.com/impg/tUspwlJLmTPoOvkI_9jhrxVHWW8-d2u-v0Y1Vg/U_e9gg_ZD8I.jpg?size=1000x1000&quality=95&sign=1b88e7c0c969a78a8a079b803345f10f&type=album ',
    name: 'Буквоед', 
    category: 'Магазин', 
    description: 'Тот самый книжный, который есть в каждом районе Петербурга и в крупнейших городах северо-запада.' },
];

const itemsPerPage = 5;

function EstablishmentList() {
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
        {currentEstablishments.map((establishment) => (
            <div className="card" key={establishment.id}>
            <div className="card_img" >
                <img src={establishment.ImgCard}width={220} ></img>
            </div>
            <div className="cardText">
            <div className="cardTitle">{establishment.name}</div>
            <div className="cardDes">{establishment.description}</div>
            <button className="cardMore">Подробнее</button>
            </div>
        </div>
    ))}
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
</div>
    );
}

export default EstablishmentList;