import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../contexts/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p className="title">Delivery Infor</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-detail">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-detail">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <div className="cart-total-detail">
                <p>Total</p>
                <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
