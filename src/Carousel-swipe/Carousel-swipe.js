import {React, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel-swipe.css'
import Photo from '../img/pr-0018-r.png';
import CoffeCardSwipe from '../CoffeCardSwipe/CoffeCarlSwipe';
import CardSliderSwipe  from '../CoffeCardSwipe/CoffeCarlSwipe'
import Coffe from '../img/IC_coffee.png'

const Carouselswipe = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {setActiveIndex( 0)};
    const slideNext = () => setActiveIndex(1);
    const slide3 = () => setActiveIndex(2);
    const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

    const onSlideChanged = (e) => {
        syncActiveIndexForSwipeGestures(e);
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };

    const onUpdated = (e) => {
        console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
    };
    
    let coffeCardFirst = <CoffeCardSwipe image={Photo} price={'285.000'} cardType={Coffe} header='Giftset "Cà phê phin Việt Nam' text='Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.' cardType={"giftsetswipe"}></CoffeCardSwipe>

    
    let coffeCard3 = <CoffeCardSwipe image={Photo} price={'85.000'} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' cardType={"giftsetswipe"} ></CoffeCardSwipe>

    
    let coffeCard5 = <CoffeCardSwipe image={Photo} price={'45.000'} text='cân bằng, hậu đắng, vị chocolate ' header='REVO Everyday' ></CoffeCardSwipe>

    
    const items = [
        coffeCardFirst, coffeCard3, coffeCard5
    ];
    
    return (
    <div><AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
        />
        <div className="b-refs-buttons">
            <button onClick={slidePrev}>1</button>
            <button onClick={slideNext}>2</button>
            <button onClick={slide3}>3</button>
        </div>
        </div>)
        
    
};

export default Carouselswipe