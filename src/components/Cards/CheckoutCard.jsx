import React,{useState} from 'react'
import "./css/checkoutCard.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';

const CheckoutCard = ({title,price}) => {
  const {user} = useSelector
  ((state)=>state.auth);

  const [details,setDetails] = useState({
    name: "",
    ccnumber: "",
    expmonth: "",
    expyear: "",
  })

  const handleChange = e => {
    setDetails({
   ...details,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(details);

    axios.post('https://secure.nmi.com/api/transact.php', {}, {
      params: {
        recurring: "add_subscription",
        ccnumber: "4111111111111111",
        payment: "creditcard",
        plan_payments: "0",
        plan_amount: "6.99",
        month_frequency: "3",
        day_of_month: "12",
        first_name: "Krishna",
        last_name: "Saxena",
        email: "krishnasaxena798@gmail.com",
        customer_receipt: true,
        security_key: "C6985y2wRqF2ufeabK8kefpy6VA74q4g",
      }
    }).then(response => {console.log(response)})
    .catch(error => {console.log(error)});

    // const params = new URLSearchParams({
    //   recurring: "add_subscription",
    //   ccnumber: "4111111111111111",
    //   payment: "creditcard",
    //   plan_payments: "0",
    //   plan_amount: "6.99",
    //   month_frequency: "3",
    //   day_of_month: "12",
    //   first_name: "Krishna",
    //   last_name: "Saxena",
    //   email: "krishnasaxena798@gmail.com",
    //   customer_receipt: true,
    //   security_key: "C6985y2wRqF2ufeabK8kefpy6VA74q4g",
    // }).toString();

    // const url =
    // 'https://secure.nmi.com/api/transact.php?' +
    //   params;
    
    const encodedParams = new URLSearchParams();
    encodedParams.set('recurring', 'add_subscription');
    encodedParams.set('ccnumber', '4111111111111111');
    encodedParams.set('payment', 'creditcard');
    encodedParams.set('plan_payments', '0');
    encodedParams.set('plan_amount', '6.99');
    encodedParams.set('month_frequency', '3');
    encodedParams.set('day_of_month', '12');
    encodedParams.set('first_name', 'k');
    encodedParams.set('last_name', 's');
    encodedParams.set('email', 'krishnasaxena798@gmail.com');
    encodedParams.set('customer_receipt', 'true');
    encodedParams.set('security_key', '6457Thfj624V5r7WUwc5v6a68Zsd6YEm');
    
    // const options = {
    //   method: 'POST',
    //   url: 'https://secure.nmi.com/api/transact.php',
    //   headers: {
    //     accept: 'application/x-www-form-urlencoded',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': "*"
    //   },
    //   data: encodedParams,
    // };


    // axios
    // .request(options)
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.error(error);
    // });
    
    // axios
    // .post(url, {},{})
    // .then(res => {
    //   console.log
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }

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
        <p style={{marginTop: "10px", color: "#fff", marginLeft: "10px"}}>* You will be billed by Swinxter</p>
      </div>
      <div className='checkout_card'>
        <h3>Membership Payment</h3>
        <p><span style={{fontWeight: "600"}}>Member: </span>{user.username}</p>
        <p><span style={{fontWeight: "600"}}>Membership:</span> {title} Plan ({price})<span style={{marginLeft: "0", fontSize: "14px", color: "#777", fontWeight: "600"}}> - (Non Refundable Charges)</span></p>
        <div className='input_holder'>
          <p>Name on the Card: </p>
          <input type="text" placeholder='Name on the card' name="name" onChange={handleChange}/>
        </div>
        <div className='input_holder'>
          <p>Card Number:</p>
          <input type="number" placeholder='Card Number (Do not use spaces)' name="ccnumber" onChange={handleChange}/>
        </div>
        <div className='accepted_card_icons'>
          <img src='/images/visa.png' style={{width: "50px"}}/>
          <img src='/images/mastercard.png' style={{width: "50px"}}/>
          <img src='/images/american-express.png' style={{width: "50px"}}/>
          <img src='/images/dicover.png' style={{width: "50px"}}/>
        </div>
        <div className='input_holder'>
            <p>Expiry Month:</p>
            <input type="number" min="1" max="12" maxLength="2" placeholder='MM' style={{width: "20%",marginLeft: "7px"}} name='expmonth' onChange={handleChange}/>
            <p style={{transform: "translateX(50px)"}}>Expiry Year:</p>
            <input type="text" placeholder='YYYY' maxLength={4} style={{width: "20%"}} name='expyear' onChange={handleChange}/>
        </div>
        <div className='input_holder'>
            <p>CVV:</p>
            <input type="text" placeholder='CVV' style={{width: "45%", marginLeft: "-5px"}}/>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label for="tnc" style={{color: "orange", width: "100%"}}>* You will be charged according to the selected package amount either after the expiry of the package or from the date of purchase(Subject to package modification or cancellation from your side.)</label>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <label for="tnc" style={{color: "orange", width: "100%"}}>* You will recieve a reminder email days before your billing date or amount deduction.</label>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <input type="checkbox" id="tnc" name="tnc" value="tnc"  style={{width: "20px", padding: "0", margin: "0 10px"}}/>
          <label for="tnc" style={{color: "orange", width: "100%"}}>I agree to <Link style={{cursor: "pointer"}} to="/legal/terms" target='_blank'>Terms & Conditions</Link> and <Link to="/legal/privacy" target="_blank">Privacy Policy</Link></label>
        </div>
        <button onClick={handleSubmit}>Proceed</button>
        <p style={{textAlign: "center", marginTop: "30px", color: "#777"}}>For questions regarding payments, please contact support.</p>
      </div>
    </div>
  )
}

export default CheckoutCard