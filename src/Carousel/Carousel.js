import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoffeCard from '../CoffeCard/CoffeCard';
import Revoy from '../img/image.png';
import RevoB from '../img/image (1).png';
import RevoO from '../img/image (2).png';
import RevoBr from '../img/image (3).png';
import CardSlider from '../CardSlider/CardSlider';
import RevoR from '../img/image(5).png';
import RevoG from '../img/image(6).png';

const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1920: {
        items: 2, 
        itemsFit: 'contain'
    },
};


let coffeCardFirst = <CoffeCard price={'99.000'} text='đắng, hậu ngọt, hương hoa ' header='REVO Morning' image={Revoy}></CoffeCard>
let coffeCardSecond = <CoffeCard price={'139.000'} text='hậu ngọt, ít đắng, vị chua dâu' header='REVO Origin' image={RevoO}></CoffeCard>

let coffeCard3 = <CoffeCard price={'85.000'} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' image={RevoB}></CoffeCard>
let coffeCard4 = <CoffeCard price={'75.000'} text='đậm đà, đắng, truyền thống' header='REVO Đậm Đà' image={RevoBr}></CoffeCard>

let coffeCard5 = <CoffeCard price={'45.000'} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' image={RevoR}></CoffeCard>
let coffeCard6 = <CoffeCard price={'99.000'} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' image={RevoG}></CoffeCard>

const items = [
    <CardSlider CoffeCard1={coffeCardFirst} CoffeCard2={coffeCardSecond}></CardSlider>,
    <CardSlider CoffeCard1={coffeCard3} CoffeCard2={coffeCard4}></CardSlider>,
    <CardSlider CoffeCard1={coffeCard5} CoffeCard2={coffeCard6}></CardSlider>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

export default Carousel;