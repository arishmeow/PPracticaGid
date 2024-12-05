import React from 'react';
import './PageHome.css';
import EstablishmentList from '../Card/Card';
import Footer from '../Footer/Footer';


function PageHome ({ establishments }) {
    return(
        <div className='body'>
            <EstablishmentList establishments={establishments}/>
            <Footer/>
        </div>
    )
}



export default PageHome