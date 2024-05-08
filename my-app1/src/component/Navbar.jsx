import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    let handleStyle = ({isActive})=>{
        return{
            fontWeight : isActive? "bold":"normal",
            textDecoration: isActive? "none":"underline",
            color: isActive? "seagreen":"inherit",
        }

    }
  return (
    <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center",width:'40%',padding:'10px'}}>
      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link> */}

      {/* <NavLink to={'/'} style={handleStyle}>Home</NavLink>
      <NavLink to={'/about'} style={handleStyle}>About</NavLink> */}
      <NavLink to={'/'} >Home</NavLink>
      <NavLink to={'/about'} >About</NavLink>
      <NavLink to = {'/products'}>Products</NavLink>
      <NavLink to = {'/users'}>User</NavLink>
    </div>
  )
}

export default Navbar
