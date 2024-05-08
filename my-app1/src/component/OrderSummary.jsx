import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    let navigate = useNavigate()
  return (
    <div>
      <h1>Order place successfully</h1>
      <button onClick={()=>{navigate(-1)}}>back</button>
    </div>
  )
}

export default OrderSummary
