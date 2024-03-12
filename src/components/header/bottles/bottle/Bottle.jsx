import './bottle.css'
const Bottle = ({bottle,handleAddCard}) => {
    const {name,img,price}=bottle
    return (
        <div className='bottle-card'>
            <h3>Name : {name}</h3>
            <img style={{width:'110px'}} src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddCard(bottle)}>Purchase</button>

        </div>
    );
};

export default Bottle;