import React from 'react'
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';



function DetailPage({ establishments }) {
const { id } = useParams();
    const establishment = establishments.find(item => item.id === parseInt(id, 10)); 

if (!establishment) {
    return <div>Заведение не найдено</div>;
}

return (
<div>
    <Header/>
    <div className='Containerr'>
        <div className='Title'>{establishment.name}</div>
            <div className='Content'>
            <div className='ImgInfo'>
                <img className='ImgPromo' src={establishment.promoImg} width={650}></img>
                <div className='Description'>{establishment.promoDescription}</div>
            </div>
            <div className='Info'>
            <div>
                <div className='contacts'>
                <div>Контактная</div> 
                <div>информация </div>
            </div>
            <div className='information'>
                <div style={{marginTop:10}}>Телефон:{establishment.phone}</div>
                <div  style={{marginTop:10}}>Адрес: {establishment.adress}</div>
                <div  style={{marginTop:10}}>Часы работы: {establishment.timing}</div>
            </div>
            </div> 
            <div className='maps'>
                <iframe src={establishment.karta} width="800" height="400" style={{border:'none', borderRadius:20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        </div>
    <Footer/>
</div>
);
}

export default DetailPage;