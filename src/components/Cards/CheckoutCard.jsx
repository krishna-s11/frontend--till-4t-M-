import React from 'react'
import "./css/checkoutCard.css";

const CheckoutCard = ({title}) => {
  return (
    <div className='checkout_card'>
        <h3>Membership Payment</h3>
        <p><span style={{fontWeight: "600"}}>Membership:</span> {title} Plan <span><p style={{marginLeft: "0", fontSize: "14px", color: "#777"}}>(Non Refundable Charges)</p></span></p>
        <input type="text" placeholder='Name on the card'/>
        <input type="text" placeholder='Card Number'/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <input type="text" placeholder='Expiry Date (MM/YY)' style={{width: "45%"}}/>
            <input type="text" placeholder='CVV' style={{width: "45%"}}/>
        </div>
        <button>Proceed</button>
        <p style={{textAlign: "center", marginTop: "30px", color: "#777"}}>All charges are NON refundable. For questions, please contact profile support</p>
    </div>
  )
}

export default CheckoutCard