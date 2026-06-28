export default function Card({title,description,oldPrice,newPrice}){
    return(
    <>
    <div id="card">
        <h3>{title}</h3>
        <h3>{description}</h3>
        {oldPrice>30000?<p style={{textDecoration:"line-through"}}>{oldPrice}</p>:<p>{oldPrice}</p>}
        {oldPrice>30000 && <p style={{backgroundColor:"yellow"}}>{newPrice}</p>}
    </div>
    
    </>
    
    )

}