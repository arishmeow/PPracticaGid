import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PageHome from './components/Pages/PageHome';
import DetailPage from './components/Pages/DetailPage';


const establishments = [
  { id: 1,
  ImgCard:'https://sun9-10.userapi.com/impf/c639120/v639120567/292b6/6X9tJa_1QdA.jpg?size=299x299&quality=96&sign=f4180015ff138a1d1f4377f7988ca4a5&type=album',
  name: 'Чайхана «Сказка»', 
  category: 'Ресторан', 
  description: 'Деловая встреча, романтический вечер, семейный ужин или посиделки в кругу друзей… Осталось только забронировать столик в комплексе «Сказка». Уникальный ресторан восточной, итальянской и японской кухонь расположился в самом сердце Великого Новгорода.',
  promoImg: 'https://sun9-29.userapi.com/impg/GT6Gv4vQpg5NDaNdL9vvriB02FGk2LuXs85aqw/nKZMVWemZug.jpg?size=1620x1080&quality=95&sign=26d729b1085cfbebf5c401fa56dee77c&type=album', 
  adress: 'Большая Власьевская улица, 1',
  phone: '+7 (8162) 70-01-11',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.625466079346!2d31.267918177544463!3d58.5176639742314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea3a65e53ca1%3A0xda68d82cbdd638d8!2z0KHQutCw0LfQutCw!5e0!3m2!1sru!2sru!4v1733333940059!5m2!1sru!2sru',
  timing: 'Ежедневно: 11:00–23:00',
  promoDescription: 'Гордость заведения — мясные блюда, которые повар готовит на открытом огне. В ресторанах сети — большой выбор мясных блюд и восточных закусок, салатов, супов, традиционной выпечки и десертов. Блюда готовятся на открытом мангале или в тандырной печи.Расслабьтесь на мягких диванах и насладитесь восточным гостеприимством в чайхане «Сказка». В уютном заведении можно устроить тихий вечер в кругу семьи, посидеть с друзьями или отдохнуть после рабочего дня. Наши повара готовят по традиционным рецептам, есть у них и секретные блюда, а наш персонал воплощает самые лучшие традиции восточного гостеприимства. Убедитесь в этом сами!'
},
  
  { id: 2, 
  ImgCard:'https://sun9-6.userapi.com/impg/f3j3ZH-ou09r_Ujp8_LiEXEDSsaPkYf8XHmfhQ/rE-pv_gMe9k.jpg?size=833x833&quality=95&sign=95bcf47eb9d5ca096e40ebc16b88c253&type=album ',
  name: 'MARUSYA RESTAURANT',
  category: 'Ресторан', 
  description: 'Вас ждут интересные сочетания ингредиентов, обширная барная карта и разнообразное меню.',
  promoImg: 'https://sun9-68.userapi.com/impg/RPYd6FC4wLpryv4XKcqwVQwM13zRUaUNFs7_-g/AcZE0Dkxq-E.jpg?size=2500x1667&quality=96&sign=db2553c8dbb246fe98aff9c549bf41f2&type=album ', 
  adress: 'ул. Предтеченская 24',
  phone: '+7 (8162) 78-88-87',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.2660491683455!2d31.262976677329245!3d58.52371607524364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beeb17fe8a2b2b%3A0xfc65440376fda728!2z0JzQsNGA0YPRgdGP!5e0!3m2!1sru!2sru!4v1733335514424!5m2!1sru!2sru',
  timing: 'Ежедневно: 12:00–23:00',
  promoDescription: 'Ресторан MARUSYA — гастро-интеллектуальный проект, наполненный литературным вкусом, авторской кухней, театральными подачами, яркими событиями и душойАвторская фьюжн-кухня, адаптированная под культуру Новгородской земли, вдохновлённая литературой и спектаклем у столикаВас ждут интересные сочетания ингредиентов, обширная барная карта и разнообразное меню'
},
  
  { id: 3,
  ImgCard:'https://sun9-33.userapi.com/impg/c858124/v858124072/f5b19/fb6yRp9P4U8.jpg?size=1280x1280&quality=96&sign=47f8aa9b9a32d516d7ad0055b953ef31&type=album ', 
  name: 'ЧАРОДЕЙКА-бар', 
  category: 'Ресторан', 
  description: 'Уникальное место вне времени с душевным сервисом и гастрономией, где можно не только сытно поесть, но и насладиться видом из окна.',
  promoImg: 'https://sun9-37.userapi.com/impg/c855216/v855216133/191f4d/bskA26gBrYI.jpg?size=1860x1240&quality=96&sign=9de8db69266c69cd5abf28d926a19049&type=album ', 
  adress: 'ул. Мерецкова-Волосова 1/1, Великий Новгород',
  phone: '+7 (911) 600-14-09',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.3576560167735!2d31.265979277329325!3d58.522173575366075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beeb40b248f567%3A0xdc16eb3fee3e8be4!2z0KfQkNCg0J7QlNCV0JnQmtCQLdCx0LDRgA!5e0!3m2!1sru!2sru!4v1733335554832!5m2!1sru!2sru',
  timing: 'Вс-Чт: 12:00-23:00  Пт-Сб: 12:00-00:00',
  promoDescription: 'Бар «Чародейка» — это уникальное место вне времени с душевным сервисом и гастрономией, где можно не только сытно поесть, но и насладиться видом из окна. Сюда приходят гости за русской домотканной кухней, аутентичными блюдами из локальных продуктов и дружественной атмосферой. Запоминающимся сопровождением в гастрономическом визите послужит богатый выбор крафтовых настоек по восстановленным традиционным рецептурам.'
},
  
  { id: 4, 
  ImgCard:'https://sun9-68.userapi.com/impg/2CBinVLxLdZsmXGvveEp83qvNdd4oQgmXP88sA/FYykee_LA5k.jpg?size=500x500&quality=96&sign=1de31bd16d55ffe528781c4db5b016d1&type=album',
  name: 'Ресторан География', 
  category: 'Ресторан', 
  description: 'Меню ресторана, в котором мы собрали много интересных и ярких блюд разных стран - Италия, Франция, Россия, Европа. Посещение этого ресторана практически путешествие по понятным и знакомым, или наоборот, по неизведанным и загадочным местам.',
  promoImg: 'https://sun9-37.userapi.com/impg/ssCNWTvV3tSWlaUyO1d73Vq1r5zFaucur3PH9A/JZfED0zjKm8.jpg?size=2560x1707&quality=95&sign=76b260a5b0f520165abb15d1dbcb50d2&type=album ', 
  adress: 'ул. Газон 2',
  phone: '+7 (8162) 90-00-55',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16665.50080117932!2d31.235895074316403!3d58.525037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beeb20959f4c8b%3A0x74d86fe3ecc27fd0!2z0KDQtdGB0YLQvtGA0LDQvSDQk9C10L7Qs9GA0LDRhNC40Y8!5e0!3m2!1sru!2sru!4v1733354493549!5m2!1sru!2sru',
  timing: 'Пн-Чт и Вс 12:00-23:00  Пт-Сб 12:00-00:00',
  promoDescription: 'Почему География? Ответ на этот вопрос очень прост - меню ресторана, в котором мы собрали много интересных и ярких блюд разных стран - Италия, Франция, Россия, Европа. Посещение этого ресторана практически путешествие по понятным и знакомым, или наоборот, по неизведанным и загадочным местам.'
}, 
  
  { id: 5, 
  ImgCard:'https://sun9-46.userapi.com/impf/c831508/v831508915/5922c/BI0vLoTfysU.jpg?size=1080x1080&quality=96&sign=39da2983b57f0da31119e4553cec6632&type=album ',
  name: 'Hurma restaurant', 
  category: 'Ресторан', 
  description: 'Эффективное сочетание ресторанной, барной и lounge-концепций, близкая каждому кухня и неповторимый дизайн с отличным панорамным видом',
  promoImg: 'https://sun9-63.userapi.com/impf/c840320/v840320338/c553/FhMQQBjsTZc.jpg?size=2560x1707&quality=96&sign=ce3b6f3036dfc700c3bba669fcf6d0a1&type=album ', 
  adress: 'Великий Новгород, ул.Великая,16',
  phone: '+7 (8162) 90-08-90',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.8401064894433!2d31.278384977329726!3d58.530887874674285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea4f2005ab65%3A0x62cbca2d63e04a1c!2sHurma%20Restaurant%26Lounge%20Bar!5e0!3m2!1sru!2sru!4v1733335576431!5m2!1sru!2sru',
  timing: 'Вс-Чт: 12:00-00:00  Пт-Сб: 12:00-01:00',
  promoDescription: 'Ресторан Hurma — это уникальное заведение, сочетающее ресторан, бар и lounge-зону. У нас вы найдете сезонные деликатесы, вегетарианские и веганские блюда, а также авторские творения шеф-повара. Бар предлагает широкий выбор коктейлей и дегустационных сетов. Lounge-зона идеально подходит для встреч с друзьями и романтических свиданий. Современный интерьер и высокий уровень обслуживания создают уютную атмосферу. Мы проводим тематические вечера и мастер-классы.'
},
  
  { id: 6,
  ImgCard:'https://sun9-27.userapi.com/impg/3d8hCcmlMJBt69O3TrI9-R8gjJ4u0GBvRtASWA/l7KtDCwiofU.jpg?size=1280x1280&quality=95&sign=ef5f3ee6e04bfddc1c0fbc66da164f41&type=album ',     
  name: 'MY KITCHEN', 
  category: 'Ресторан', 
  description: 'Здесь можно найти любимые блюда итальянской, русской, японской кухонь в новом прочтении, а также популярной грузинской. Прекрасное место для делового обеда, романтического вечера, семейного ужина или встречи с друзьями!',
  promoImg: 'https://sun9-78.userapi.com/impf/c604827/v604827363/27ef/C6reoq3EFxg.jpg?size=1932x1287&quality=96&sign=8fb9a386d835cecbfb7925d93b8025f6&type=album ', 
  adress: 'ул. Псковская 11, Великий Новгород',
  phone: '+7 (8162) 90-01-36',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.716312734553!2d31.244984877328985!3d58.51613417584557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea2ce54303fd%3A0x55193f40b5c5a834!2sMy%20Kitchen!5e0!3m2!1sru!2sru!4v1733335599351!5m2!1sru!2sru',
  timing: 'с 12:00 до 02:00',
  promoDescription: 'Проект ресторанной компании Gourmetto Group. Новый формат, в котором сочетаются кухни Востока и Европы. Здесь можно найти любимые блюда итальянской, русской, японской кухонь в новом прочтении, а также популярной грузинской. Прекрасное место для делового обеда, романтического вечера, семейного ужина или встречи с друзьями!'
},
  
  { id: 7, 
  ImgCard:'https://sun9-52.userapi.com/impg/RbvMT11zYYzUmg-_p734V4-xwfAIfni8wLChnw/ShTtkbvbvFE.jpg?size=898x1080&quality=95&sign=119de01ba1eae804f109de5823a7bbf8&type=album ',
  name: 'WELCOME', 
  category: 'Кафе', 
  description: 'Европейская кухня, блюда с печи, большой ассортимент блюд с мангала.',
  promoImg: 'https://sun9-76.userapi.com/impf/c853424/v853424388/a93db/FgKvhDjT6Ms.jpg?size=960x720&quality=96&sign=37645ea3dc33e86ce9c75ec45a61b64e&type=album ', 
  adress: 'Нехинская 9',
  phone: '+7 (911) 600-15-44',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.254129774035!2d31.23582547732925!3d58.523916775227804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebc5fb91c2bb%3A0x56c03e6ba585f4b8!2sWelcome!5e0!3m2!1sru!2sru!4v1733335615551!5m2!1sru!2sru',
  timing: 'Пн-Чт:  11:00 - 1:00  Пт-Вс:  11:00 - 2:00',
  promoDescription: 'Отличные блюда европейской кухни (вкуснейшие салаты, пасты, горячие блюда, холодные закуски, хачапури и многое другое). Огромный выбор блюд с мангала, самое популярное из которых - САДЖ (Ассорти с мангала). Обеденное меню. Большой ассортимент алкоголя и коктейлей. Отличная атмосфера. Танцпол, танцы и живая музыка по пт. и сб. Приветливый и отзывчивый персонал'
},
  
  { id: 8, 
  ImgCard:'https://sun9-79.userapi.com/impg/n9trHwaTHipWpqOTyjrVXTrSsq0IAXQ_Av0Tsw/S4pT3FQLvRE.jpg?size=1080x1080&quality=96&sign=14824ec84c2858d136d8ebe0762ca1b4&type=album ',
  name: 'СУДАРУШКА', 
  category: 'Кафе', 
  description: 'Уютное кафе с домашней кухней в историческом центре Великого Новгорода.',
  promoImg: 'https://make-eat.ru/assets/cache_image/assets/gallery/705/4297_0x0_ed1.jpg ', 
  adress: 'ул. Большая Московская 32/12, Великий Новгород',
  phone: '+7 (991) 492-03-55',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.4494573326137!2d31.286020177329174!3d58.52062777548883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea3f42a358ef%3A0x5f7119560e8abb19!2z0KHRg9C00LDRgNGD0YjQutCw!5e0!3m2!1sru!2sru!4v1733335633368!5m2!1sru!2sru',
  timing: 'с 11.00 до 23.00',
  promoDescription: 'Обязательно загляните в это кафе, если окажетесь неподалёку от Ганзейского фонтана. В Сударушке рекомендуют заказывать блюда русской кухни. В этом месте вам подадут неплохого судака, солянку и драники. Здесь готовят хорошие блинчики, варенье и мороженое. Закажите хорошее бочковое пиво или неплохой глинтвейн. Здесь можно попробовать вкусный чай, квас или американо.'
},
  
  { id: 9, 
  ImgCard:'https://sun9-18.userapi.com/impf/c845521/v845521973/e1cf/PLPNeBxlqUA.jpg?size=500x500&quality=96&sign=5e357899da0beab0d7c0baa8f8fc5a3d&type=album ',
  name: 'Café le Chocolat', 
  category: 'Кафе', 
  description: 'Увлекательная гастрономическая игра вкусов и ароматов, изысканные десерты ручной работы, авторская карта коктейлей и подача настоящего русского алкоголя от старейшего завода "Алкон".',
  promoImg: 'https://sun9-24.userapi.com/impf/c623718/v623718437/9c14/tJVZ_eBUajc.jpg?size=1000x625&quality=96&sign=0f6f685e867663b15755de0cd7d16068&type=album ', 
  adress: 'Людогоща улица, 8, Великий Новгород',
  phone: '+7 (8162) 73-90-09',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.21206426339!2d31.2636361773294!3d58.52462507517152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebac1d857499%3A0x3e085f0b0a19579b!2sCafe%20Le%20Chocolat!5e0!3m2!1sru!2sru!4v1733335675960!5m2!1sru!2sru',
  timing: 'ПН-ВС 09.00-23.00/без выходных',
  promoDescription: 'Café le chocolat-это увлекательная гастрономическая игра вкусов и ароматов, изысканные десерты ручной работы, авторская карта коктейлей и подача настоящего русского алкоголя от старейшего завода “Алкон”. Café le Chocolat состоит из двух залов: красный и зеленый. В красном зале уютно и тесновато. Здесь можно сдвигать столики (хоть все 12, на две персоны каждый), перемигиваться с барменом и гипнотизировать винную витрину. А в зёленом зале лучше устраивать семейные обеды и ужины — чинно, благородно (9 столов: два маленьких, на две персоны каждый и семь больших, на четыре-шесть человек).'
},
  
  { id: 10, 
  ImgCard:'https://sun9-76.userapi.com/impf/pPaD9sjj16-Bc82t7dtjb2Oz-Jz1lCbrkUr3fw/Sm05ZjJq4Zw.jpg?size=851x851&quality=96&sign=366da27ed88ecf067df15d0f6c74a481&type=album ',
  name: 'ХочуТорт', 
  category: 'Кафе', 
  description: 'Уютное, семейное кафе, где Вы всегда можете насладиться чудесным кофе, шикарными десертами от нашей кондитерской, вкусной кухней и нашим милым интерьером в самом центре Великого Новгорода!',
  promoImg: 'https://sun9-61.userapi.com/impf/TGIuynzoeQznhu9FA09i-_xDJfOmR32Fp1Q0zQ/L1EWP91YwtI.jpg?size=2560x1706&quality=96&sign=45f3254c6d0b76a00490565048d4cc4c&type=album', 
  adress: 'пр.А.Корсунова 28',
  phone: '+7 (8162) 99-88-11',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33331.354073790506!2d31.225011857271276!3d58.52466606971977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebbceed337ef%3A0x5d19d2f557c6a3b0!2z0JrQvtC90LTQuNGC0LXRgNGB0LrQsNGPINC80LDRgdGC0LXRgNGB0LrQsNGPICLQpdC-0YfRg9Ci0L7RgNGCIg!5e0!3m2!1sru!2sru!4v1733335695743!5m2!1sru!2sru',
  timing: '10:00-20:00, без выходных!',
  promoDescription: 'Мы ежедневно принимаем сотни гостей. Наше кафе — не только про кухню. Это особая атмосфера: приятные ароматы, теплые улыбки, детский смех, пастельные тона и уютные мелочи вокруг. Мы берем на себя все заботы и дарим нашим гостям время на приятное общение за трапезой.'
},
  
  { id: 11,
  ImgCard:'https://sun9-1.userapi.com/impg/oJR-vfCCObdQpZWD64kkQ82xAwcxtD1JU-P0Dg/446qK_am1oU.jpg?size=769x769&quality=95&sign=475ccf2c5dc0ba7579fe9c8607fca013&type=album ', 
  name: 'ВкусВилл', 
  category: 'Магазин', 
  description: 'Магазин вкусных и полезных продуктов с честным составом.',
  promoImg: 'https://avatars.mds.yandex.net/i?id=4a90d87e45576e76ce3f43e940ba17d8_l-4599827-images-thumbs&n=13 ', 
  adress: 'Псковская ул., 32',
  phone: '8 (800) 550-86-02',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16666.7948832644!2d31.23791100617!3d58.52231326002468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebf0331b144d%3A0x2ad8f8b4a8c1eaf7!2z0JLQutGD0YHQktC40LvQuw!5e0!3m2!1sru!2sru!4v1733335715719!5m2!1sru!2sru',
  timing: '08:00-22:00',
  promoDescription: 'Наши технологи находят уникальные продукты с лучшими составами. А вкус это ещё один важный критерий оценки качества, в котором главные критики — покупатели. Вместе с покупателями поддерживаем экопривычки и помогаем тем, кому это нужно. Делимся мнениями экспертов о здоровом образе жизни и сотрудничаем с благотворительными проектами.'
},
  
  { id: 12, 
  ImgCard:'https://sun9-16.userapi.com/impg/WIlzQOD77egzSG-BB_tH_EVv3xNFhW6Nfw5vEA/x3qBRwiSwcU.jpg?size=1280x1280&quality=95&sign=c10c1d102da026a1b13543957310816f&type=album ',
  name: 'Композит', 
  category: 'Магазин', 
  description: 'База отделочных и строительных материалов " Композит " является одной из крупнейших строительных баз по Новгородской области. Существует на рынке уже более 20 лет.',
  promoImg: 'http://kompozitvn.ru/uploads/images/slides/main/6e96416c9ed530e1787187610bc5eb1d.jpg', 
  adress: 'Псковская ул., 59А',
  phone: '+7 (8162) 77-80-41',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.675331523551!2d31.24698027732896!3d58.51682427579072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebac1d857499%3A0x7ec2e0415a05cf15!2z0JrQvtC80L_QvtC30LjRgg!5e0!3m2!1sru!2sru!4v1733335733927!5m2!1sru!2sru',
  timing: 'Пн-Пт: 08:30 – 19:00  Сб-Вс: 09:00 – 19:00',
  promoDescription: 'Новый Композит – это уже знакомая стройбаза с 25-летним опытом продаж стройматериалов. Мы объединили все лучшее, что у нас было и добавили больший ассортимент и еще более качественный сервис к этому для вашего удобства. Теперь Композит состоит из нескольких торговых площадок, расположенных рядом на одной территории. Мы увеличили площадь в 2 раза. Кроме того, расширили ассортимент. Весь ремонт в одном месте – это Композит.'
},
  
  { id: 13, 
  ImgCard:'https://sun9-11.userapi.com/impg/9Xnza0wO0w6lvSWnlNb_XnvrEsqry06Dssq85A/P8E_AM9uIPc.jpg?size=1080x1080&quality=95&sign=78d3ed7262be57d8f4faa26c766ebef8&type=album ',
  name: 'Бэстфон', 
  category: 'Магазин', 
  description: 'Магазин цифровой техники и электроники. У нас вы можете купить: Apple, Samsung, Xiaomi, пожалуй, по самой лучшей цене!',
  promoImg: 'https://peterburg2.ru/uploads/22/06/29/ga11_14.jpg  ', 
  adress: 'Чудинцева ул., 11/62, район Софийская сторона',
  phone: '+7 (8162) 55-55-35',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16664.412429201057!2d31.232110006185987!3d58.52732770696878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea3413e01e85%3A0x6adc3ef2ea5885e5!2z0JHRjdGB0YLRhNC-0L0!5e0!3m2!1sru!2sru!4v1733335750399!5m2!1sru!2sru',
  timing: '10:00 – 21:00',
  promoDescription: 'Наш магазин тоже является своего рода совершенным, так как мы продаем только качество. Продаваемая нами техника оригинальна и имеет гарантию от производителя 1 год. Мы любим то, что продаем, и очень любим свой салон и своих клиентов. Поэтому, если вы хотите купить iPhone в Великом Новгороде, не раздумывайте долго. Мы – рядом с вами в любом смартфоне или планшете по ссылке нашего магазина BestPhone.'
},
  
  { id: 14, 
  ImgCard:'https://cdn4.cdn-telegram.org/file/pP1SwQ8dQP2dnbaBkdMNgkFyvpXXLViUsQPBgskYgljjQwh72dl0NOUZ-bwdelIsYtzRMd5jXiVvh6ATliW449TuKPpV5Q2rmL5mkHRz8PD46ifcktfqx3swSChc8OKngmU9VnBnDqih19JhRPAJeVtWwu8-48cBpQ1Xkq9ZkBA_jbg94_unDnt7V5RfOjS-pt-LIvcA7uK-n_zCVs38lpXoygrVNpCk_MVblCG9BFbx_kV_y2QjiykVl503goRMOWWab3qIgCnds2iy5-XqEArqjPsLOtKVFqnkI0PkD5pfsj-5XYN_jJgdRdXYNyjp0KuK7B56C4rx4FzXxv1Z6A.jpg ',
  name: 'Твое', 
  category: 'Магазин', 
  description: ' Широкий ассортимент женской, мужской одежды, обуви и аксессуаров.',
  promoImg: 'https://sarlomtorg.ru/wp-content/uploads/1/5/f/15ff33ddc0a69c8a778fd476237524a8.jpeg', 
  adress: 'ул. Ломоносова, 29 этаж 2',
  phone: '8 (800) 555-56-96',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16664.392704668393!2d31.232110001349916!3d58.527369220864976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebb8c4ab1f1b%3A0x551035d5f3c9b80e!2z0KLQktCe0JU!5e0!3m2!1sru!2sru!4v1733335806367!5m2!1sru!2sru',
  timing: '10:00 – 21:00',
  promoDescription: 'Главный приоритет ТВОЕ – качество по доступной цене, поэтому для нашей продукции мы выбираем лучшие материалы. В наших коллекциях вы найдете удобные вещи для своего гардероба - базовые повседневные футболки, толстовки, свитшоты, джинсы, спортивные брюки, а также модели с оригинальными дизайнерскими элементами.'
},
  
  { id: 15, 
  ImgCard:'https://sun9-28.userapi.com/impg/tUspwlJLmTPoOvkI_9jhrxVHWW8-d2u-v0Y1Vg/U_e9gg_ZD8I.jpg?size=1000x1000&quality=95&sign=1b88e7c0c969a78a8a079b803345f10f&type=album ',
  name: 'Буквоед', 
  category: 'Магазин', 
  description: 'Тот самый книжный, который есть в каждом районе Петербурга и в крупнейших городах северо-запада.' ,
  promoImg: 'https://www.malls.ru/upload/medialibrary/1d9/BK_7.jpg ', 
  adress: 'Большая Санкт-Петербургская ул., 25',
  phone: '+7 (812) 601-06-01',
  karta: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66657.41117811638!2d31.17030999784081!3d58.52745321901618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beea4b5b1830bb%3A0x87c4f9b92846a41!2z0JHRg9C60LLQvtC10LQ!5e0!3m2!1sru!2sru!4v1733335834696!5m2!1sru!2sru',
  timing: '09:00 – 21:00',
  promoDescription: 'Мы предлагаем большой выбор книг, поддерживая длительные и дружелюбные партнёрские отношения с большинством издательств, работающих на российском книжном рынке. Мы любим книги и ценим любовь к книгам наших покупателей, поэтому стараемся сделать всё возможное, чтобы каждая книга нашла своего читателя.'
},
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PageHome establishments={establishments} />} />
        <Route path="/establishments/:id" element={<DetailPage establishments={establishments} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
