import React from 'react'
import "./css/checkoutCard.css";

const CheckoutCard = ({title}) => {
  return (
    <div className='checkout_card'>
        <h3>Buy Membership</h3>
        <p><span style={{fontWeight: "600"}}>Membership:</span> {title} Plan</p>
        <input type="text" placeholder='Name on the card'/>
        <input type="text" placeholder='Card Number'/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <input type="text" placeholder='Expiry Date (MM/YY)' style={{width: "45%"}}/>
            <input type="text" placeholder='CVV' style={{width: "45%"}}/>
        </div>
        <button>Proceed</button>
    </div>
  )
}

export default CheckoutCard