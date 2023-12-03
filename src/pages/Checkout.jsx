import React from 'react'
import CheckoutCard from '../components/Cards/CheckoutCard'
import { useParams } from 'react-router-dom'


const Checkout = () => {
    const title = useParams().title;
  return (
    <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "#000"}}>
        <CheckoutCard title={title} />
    </div>
  )
}

export default Checkout