import './CoffeCard.css';

function CoffeCard({image,header,text,price,cardType}) {

    return(
        <article>
            <img src={image} className={cardType == 'giftset'?'1':'cardcoffe'}/>
            <div className='Textcooffecard'>
            <p className='price'>{price}</p>
            <h3 className='header-coffe'>{header}</h3>
            <p className='text-coffe'>{text}</p>
            {cardType == 'giftset'? <div><img src={image}></img> <p>Loại hạt<br></br>Fine Robusta Blend</p></div>: <></>}
            {cardType == 'giftset'? <div><img src={image}></img> <p>Độ cao <br></br>700 - 800m</p></div>: <></>}
            <button className='button-card'><span>MUA NGAY</span></button>
            <button className='button-card2'><span>CHI TIẾT</span></button>
            </div>
        </article>
    )
}

export default CoffeCard;