import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let {setUser} = useContext(UserContext);

    let handleClick = (e)=>{
        e.preventDefault();
        setUser({username:username,password:password})

    };

  return (
    <div>
        <h2>Login</h2>
        <form>
            <input type="text" name="username" id="username" onChange={e=>setUsername(e.target.value)} value={username} placeholder='Enter Username' />
             <br/>
            <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder='Enter Password' />
            <button type='submit' onClick={handleClick}>Submit</button>
        </form>
      
    </div>
  )
}

export default Login
