import './CoffeCard.css';

function CoffeCard({image,header,text,price}) {

    return(
        <article>
            <img src={image}/>
            <div>
            <p className='price'>{price}</p>
            <h3 className='header-coffe'>{header}</h3>
            <p className='text-coffe'>{text}</p>
            <button className='button-card'><span>MUA NGAY</span></button>
            <button className='button-card2'><span>CHI TIẾT</span></button>
            </div>
         
                
           
        </article>
    )
}

export default CoffeCard;