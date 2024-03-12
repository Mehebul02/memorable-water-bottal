import React, { useEffect, useState } from 'react';
import Bottle from './bottle/Bottle';
import './Bottles.css'
const Bottles = () => {
  const[bottle,setBottle] = useState([]);
  const [shoppingCart,setShoppingCart]=useState([])
  useEffect(()=>{
    fetch('battle.json')
    .then(res => res.json())
    .then(data => setBottle(data))
  },[]);
  // Added cart 
  const handleAddCard =(bottle)=>{
    console.log('Added the card')
    const newShoppingCart =[...shoppingCart,bottle]
    setShoppingCart(newShoppingCart)
  }
    return (
        <div>
            <h2>Bottles:{bottle.length}</h2>
            <h3>Cart:{shoppingCart.length}</h3>
            <ul>
                {
                  shoppingCart.map(bottle => <h4 key={bottle.id} style={{listStyle:'none', color:'yellow', fontWeight:'50px'}}>{bottle.name} {bottle.price}</h4>)
                  
                }
                
                 
              </ul>
            <div className='bottles_container'>
             
            {
              bottle.map(bottle => 
              <Bottle 
              key={bottle.id} 
              bottle={bottle} 
              handleAddCard={handleAddCard}
              ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;