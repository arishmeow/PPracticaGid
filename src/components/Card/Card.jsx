import React from "react";
import './Card.css'



function Card (props) {
    return(
    <div className="card">
    <div className="card_img">
    <img src={props.ImgCard} width={220} ></img></div>
    <div class="cardTitle">
    <div className="cardMeinTitle">{props.MeinTitle}</div>
    <div className="cardSubTitle">
    {props.SubTitle}
    </div>
    <button class="cardMore">Подробнее</button>
    </div>
</div>
    )
}

export default Card