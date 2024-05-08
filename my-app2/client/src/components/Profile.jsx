import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    let {user} = useContext(UserContext)
  return (
    <div>
      <h2>User Profile : {user.username}</h2>
      <h2>User Password: {user.password}</h2>
    </div>
  )
}

export default Profile
