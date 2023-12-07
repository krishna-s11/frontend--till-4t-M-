import React,{useState} from 'react'
import "./css/checkoutCard.css";
import { useSelector } from "react-redux";

const CheckoutCard = ({title,price}) => {
  const {user} = useSelector
  ((state)=>state.auth);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className='checkout_card_holder'>
      <div className='checkout_billing'>
        <h3>Billing Details</h3>
        <div className='billing_detail_sec'>
          <div>
            <p>Payment to: </p>
            <p>Swinxter Inc</p>
          </div>
          <div>
            <p>Name: </p>
            <p>{user.username}</p>
          </div>
          <div>
            <p>Plan: </p>
            <p>{title}</p>
          </div>
          <div>
            <p>Date: </p>
            <p>{month}/{day}/{year}</p>
          </div>
          <div>
            <p>Price: </p>
            <p>{price}</p>
          </div>
          <div>
            <p>Recurring: </p>
            <p>{price==="Free"?"No":"Yes"}</p>
          </div>
          <hr></hr>
          <div>
            <p>total: </p>
            <p>{price}</p>
          </div>
        </div>
      </div>
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
        <div className='accepted_card_icons'>
          <img src='/images/visa.png' style={{width: "50px"}}/>
          <img src='/images/mastercard.png' style={{width: "50px"}}/>
          <img src='/images/american-express.png' style={{width: "50px"}}/>
          <img src='/images/dicover.png' style={{width: "50px"}}/>
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
        <div style={{display: "flex", alignItems: "center"}}>
          <input type="checkbox" id="tnc" name="tnc" value="tnc"  style={{width: "20px", padding: "0", margin: "0 10px"}}/>
          <label for="tnc" style={{color: "orange", width: "100%"}}>I agree to Terms & Conditions and Privacy Policy</label>
        </div>
        <button>Proceed</button>
        <p style={{textAlign: "center", marginTop: "30px", color: "#777"}}>For questions regarding payments, please contact support.</p>
      </div>
    </div>
  )
}

export default CheckoutCard