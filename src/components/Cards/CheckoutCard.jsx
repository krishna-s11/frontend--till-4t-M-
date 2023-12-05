import React,{useState} from 'react'
import "./css/checkoutCard.css";
import { useSelector } from "react-redux";

const CheckoutCard = ({title,price}) => {
  const {user} = useSelector
  ((state)=>state.auth);

  return (
    <div className='checkout_card'>
        <h3>Membership Payment</h3>
        <p><span style={{fontWeight: "600"}}>Member: </span>{user.username}</p>
        <p><span style={{fontWeight: "600"}}>Membership:</span> {title} Plan ({price})<span style={{marginLeft: "0", fontSize: "14px", color: "#777", fontWeight: "600"}}> - (Non Refundable Charges)</span></p>
        <div className='input_holder'>
          <p>Name on the Card: </p>
          <input type="text" placeholder='Name on the card'/>
        </div>
        <div className='input_holder'>
          <p>Card Number:</p>
          <input type="number" placeholder='Card Number (Do not use spaces)'/>
        </div>
        <div className='input_holder'>
            <p>Expiry Month:</p>
            <input type="number" min="1" max="12" maxLength="2" placeholder='MM' style={{width: "20%",marginLeft: "7px"}}/>
            <p style={{transform: "translateX(50px)"}}>Expiry Year:</p>
            <input type="text" placeholder='YYYY' maxLength={4} style={{width: "20%"}}/>
        </div>
        <div className='input_holder'>
            <p>CVV:</p>
            <input type="text" placeholder='CVV' style={{width: "45%", marginLeft: "-5px"}}/>
        </div>
        <button>Proceed</button>
        <p style={{textAlign: "center", marginTop: "30px", color: "#777"}}>For questions regarding payments, please contact support.</p>
    </div>
  )
}

export default CheckoutCard