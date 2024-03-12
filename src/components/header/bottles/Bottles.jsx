import React, { useEffect, useState } from 'react';
import Bottle from './bottle/Bottle';
import './Bottles.css'
import { addToLS, localStoredCart } from '../../../utilities/localStorage';
const Bottles = () => {
  const[bottles,setBottle] = useState([]);
  const [shoppingCart,setShoppingCart]=useState([])
  useEffect(()=>{
    fetch('battle.json')
    .then(res => res.json())
    .then(data => setBottle(data))
  },[]);
  useEffect(()=>{
    console.log('hdfgsdf',bottles.length)
    if(bottles.length){
      const storedCart = localStoredCart()
    console.log(storedCart,bottles)
    const saveCart =[]
    for (const id of storedCart){
      console.log(id)
      
      const bottle =bottles.find(bottle => bottle.id ===id)
      if(bottle){
        saveCart.push(bottle)

      }
      
    }
    console.log('save cart added',saveCart)
    setShoppingCart(saveCart)
    }
  },[bottles])
  // Added cart 
  const handleAddCard =(bottle)=>{
    console.log('Added the card')
    const newShoppingCart =[...shoppingCart,bottle]
    setShoppingCart(newShoppingCart)
    addToLS(bottle.id)
  }
    return (
        <div>
            <h2>Bottles:{bottles.length}</h2>
            <h3>Cart:{shoppingCart.length}</h3>
            <ul>
                {
                  shoppingCart.map(bottle => <h4 key={bottle.id} style={{listStyle:'none', color:'yellow', fontWeight:'50px'}}>{bottle.name} {bottle.price}</h4>)
                  
                }
                
                 
              </ul>
            <div className='bottles_container'>
             
            {
              bottles.map(bottle => 
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