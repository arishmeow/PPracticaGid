import './PageHome.css';
import Header from "../Header/Header";
import Card from "../Card/Card";




function PageHome() {
    return(
        <div className='body'>
            <Header/>
            <div className='cards'>
            <Card ImgCard='https://sun9-10.userapi.com/impf/c639120/v639120567/292b6/6X9tJa_1QdA.jpg?size=299x299&quality=96&sign=f4180015ff138a1d1f4377f7988ca4a5&type=album' MeinTitle="Чайхана «Сказка»" SubTitle="Деловая встреча, романтический вечер, семейный ужин или посиделки в кругу друзей… Осталось только забронировать столик в комплексе «Сказка».
    Уникальный ресторан восточной, итальянской и японской кухонь расположился в самом сердце Великого Новгорода."/>
            <Card ImgCard='https://sun9-6.userapi.com/impg/f3j3ZH-ou09r_Ujp8_LiEXEDSsaPkYf8XHmfhQ/rE-pv_gMe9k.jpg?size=833x833&quality=95&sign=95bcf47eb9d5ca096e40ebc16b88c253&type=album' MeinTitle="MARUSYA RESTAURANT" SubTitle="Вас ждут интересные сочетания ингредиентов, обширная барная карта и разнообразное меню."/>
            <Card ImgCard='https://sun9-33.userapi.com/impg/c858124/v858124072/f5b19/fb6yRp9P4U8.jpg?size=1280x1280&quality=96&sign=47f8aa9b9a32d516d7ad0055b953ef31&type=album'    MeinTitle="ЧАРОДЕЙКА-бар" SubTitle="Уникальное место вне времени с душевным сервисом и гастрономией, где можно не только сытно поесть, но и насладиться видом из окна."/>
            <Card ImgCard='https://sun9-68.userapi.com/impg/2CBinVLxLdZsmXGvveEp83qvNdd4oQgmXP88sA/FYykee_LA5k.jpg?size=500x500&quality=96&sign=1de31bd16d55ffe528781c4db5b016d1&type=album' MeinTitle="Ресторан География" SubTitle="Меню ресторана, в котором мы собрали много интересных и ярких блюд разных стран - Италия, Франция, Россия, Европа. Посещение этого ресторана практически путешествие по понятным и знакомым, или наоборот, по неизведанным и загадочным местам."/>
            <Card ImgCard='https://sun9-46.userapi.com/impf/c831508/v831508915/5922c/BI0vLoTfysU.jpg?size=1080x1080&quality=96&sign=39da2983b57f0da31119e4553cec6632&type=album' MeinTitle="Hurma restaurant" SubTitle="Эффективное сочетание ресторанной, барной и lounge-концепций, близкая каждому кухня и неповторимый дизайн с отличным панорамным видом"/>
            
            
            </div>
        </div>
    )
}

export default PageHome