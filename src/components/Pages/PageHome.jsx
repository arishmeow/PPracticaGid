import React from 'react';
import './PageHome.css';
import Header from "../Header/Header";
import EstablishmentList from '../Card/Card';
import Footer from '../Footer/Footer';

function PageHome () {
    return(
        <div className='body'>
            <EstablishmentList/>

        </div>
    )
}



export default PageHome