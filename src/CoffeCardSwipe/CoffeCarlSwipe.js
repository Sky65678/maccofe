import './CoffeCarlSwipe.css';
import cofezerno from '../img/IC_coffee.png'
import cofezmountain from '../img/IC_Mountain.png'
function CoffeCarlSwipe({image,header,text,price,cardType}) {

    return(
        <article>
            <img src={image} className={cardType == 'giftset'?'1':'coffecardswipe'}/>
            <div className='caffecardswipe'>
            <p className='priceswipe'>{price}</p>
            <h3 className='header-coffeswipe'>{header}</h3>
            <p className='text-coffeswipe'>{text}</p>
            <div className='coofee-mon-zerno'>
            {cardType == 'giftsetswipe'? <div className='cofezerno-div'><img src={cofezerno}></img> <h5>Loại hạt<br></br><span className='Fine-text'>Fine Robusta Blend</span></h5></div>: <></>}
            {cardType == 'giftsetswipe'? <div className='cofemoun-div'><img src={cofezmountain}></img> <h5>Độ cao <br></br><span className='Fine-text'>700 - 800m</span></h5></div>: <></>}
            </div>
            
            <button className='button-cardswipe'><span>MUA NGAY</span></button>
            <button className='button-card2swipe'><span>CHI TIẾT</span></button>
            </div>
        </article>
        
    )
}

export default CoffeCarlSwipe;