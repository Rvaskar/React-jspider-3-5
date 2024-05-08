import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate('order-summary')}>place your order</button>
    </div>
  )
}

export default Home
