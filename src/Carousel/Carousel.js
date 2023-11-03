import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoffeCard from '../CoffeCard/CoffeCard';
import Revoy from '../img/image.png';
import RevoB from '../img/image (1).png';
import RevoO from '../img/image (2).png';
import RevoBr from '../img/image (3).png';

const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1920: {
        items: 3, 
        itemsFit: 'contain'
    },
};

const items = [
    <CoffeCard price={99.000} text='đắng, hậu ngọt, hương hoa ' header='REVO Morning' image={Revoy}></CoffeCard>,
    <CoffeCard price={85.000} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' image={RevoB}></CoffeCard>,
    <CoffeCard price={139.000} text='hậu ngọt, ít đắng, vị chua dâu' header='REVO Origin' image={RevoO}></CoffeCard>,
    <CoffeCard price={75.000} text='đậm đà, đắng, truyền thống' header='REVO Đậm Đà' image={RevoBr}></CoffeCard>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

export default Carousel;