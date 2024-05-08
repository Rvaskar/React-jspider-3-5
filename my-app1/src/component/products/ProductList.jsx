import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProductList = () => {
  return (
    <div>
      <h1>List of the Component</h1>
      <input type="search" name="search_products" id="search_products" placeholder='search_products' />
      <br/>
      <br/>
      <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center",width:'40%',padding:'10px'}}>
      <NavLink to={"new"}>New</NavLink>
      <NavLink to={"featured"}>Featured</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default ProductList
