import './CoffeCarlSwipe.css';

function CoffeCarlSwipe({image,header,text,price,cardType}) {

    return(
        <article>
            <img src={image} className={cardType == 'giftset'?'1':'2'}/>
            <div>
            <p className='priceswipe'>{price}</p>
            <h3 className='header-coffeswipe'>{header}</h3>
            <p className='text-coffeswipe'>{text}</p>
            {cardType == 'giftsetswipe'? <div><img src={image}></img> <p>Loại hạt<br></br>Fine Robusta Blend</p></div>: <></>}
            {cardType == 'giftsetswipe'? <div><img src={image}></img> <p>Độ cao <br></br>700 - 800m</p></div>: <></>}
            <button className='button-cardswipe'><span>MUA NGAY</span></button>
            <button className='button-card2swipe'><span>CHI TIẾT</span></button>
            </div>
        </article>
    )
}

export default CoffeCarlSwipe;