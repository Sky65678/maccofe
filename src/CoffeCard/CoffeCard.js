function CoffeCard({image,header,text,price}) {

    return(
        <article>
            <img src={image}/>
            <h3>{header}</h3>
            <p>{text}</p>
            <p>{price}</p>
        </article>
    )
}

export default CoffeCard;