import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  let [searchVal, setSearchVal] = useState("")

  let handleChange = (e)=>{
    
    setSearchVal(e.target.value)
  }

  let handleSearch = (e)=> {

    console.log(searchVal)
  }
  
  return (
    <div>
      <h3>User1</h3>
      <h3>User2</h3>
      <h3>User3</h3>
      <h3>User4</h3>
      <h3>User5</h3>
      <input type="input" name="id_s" id="id_s"  placeholder='id_s' onChange={handleChange}   />
      <button type="button" onClick={handleSearch}>click</button>
      <Outlet/>
    </div>
  )
}

export default Users
