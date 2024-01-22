import React from 'react'
import CheckoutCard from '../components/Cards/CheckoutCard'
import { useParams } from 'react-router-dom'


const Checkout = () => {
    const title = useParams().title;
    const price = useParams().price;
  return (
    <div style={{width: "100%", height: "110vh", display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#111"}}>
        <CheckoutCard title={title} price={price}/>
    </div>
  )
}

export default Checkout