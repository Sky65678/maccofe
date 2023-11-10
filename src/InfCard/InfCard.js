import './InfCard.css';

function InfCard({image,header,text,price}) {

    return(
        <article>
            <img src={image}/>
            <div>
            <p className='price'>{price}</p>
            <h3 className='header-coffe'>{header}</h3>
            <p className='text-coffe'>{text}</p>
            <div></div>
            <div></div>
            <button className='button-card'><span>MUA NGAY</span></button>
            <button className='button-card2'><span>CHI TIẾT</span></button>
            </div>
        </article>
    )
}

export default InfCard;