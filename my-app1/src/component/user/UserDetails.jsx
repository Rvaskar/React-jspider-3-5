import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  let x = useParams();
  console.log(x)
  return (
    <div>
      <h1>userDetails is: {x.userId}</h1>
    </div>
  )
}

export default UserDetails
