// import React, { Component } from 'react'

// export default class App8 extends Component {
//     constructor(){
//         super();
//         this.state = {username: '', password:''}
//     }
//     handleChange=(e)=>{
//         let {name,value}=e.target;
//         this.setState({...this.state,[name]:value});
//     }
//   render() {
//     return (
//       <form onSubmit={(e)=>{
//         e.preventDefault();
//         console.log(this.state)
//       }}>
//         <h1>Sign Up</h1>
//         <input type="text" name="username" id='username' placeholder='Enter Username' onChange={this.handleChange} /> <br/>
//         <input type="password" name="password" id='password' placeholder='Enter password' onChange={this.handleChange} /> <br/>
//         <button type='submit'>submit</button>
//       </form>   
//     )
//   }
// }

import React, { useState } from 'react'
import Country from '../Country.json'

const App8 = () => {
    let [data,setData]=useState({
        username: "",
        password:'',
        email:'',
        DOB:'',
        gender:'',
        skills:[],
        country:''
    })
    let handleChange = (e)=>{
        let {name,value}=e.target;
        setData({...data,[name]:value})
    }
    let handleChangeSkills=(e)=>{
        let {name,value}=e.target;
        let x = data.skills;
        if(!x.includes(value))data.skills.push(value);
        else{
            let ind = x.indexOf(value);
            x.splice(ind,1)
        }
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        setData({
            username: "",
            password:'',
          email:'',
          DOB:'',
          gender:'',
          skills:[],
          country:'',
        })
    }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input type="text" name='username' id='username' placeholder='Enter Username' onChange={handleChange} value={data.username} /> <br/><br/>
      <input type="password" name='password' id='password' placeholder='Enter password' onChange={handleChange} value={data.password} /> <br/><br/>
      <input type="email" name='email' id='email' placeholder='Enter email' onChange={handleChange} value={data.email} /> <br/><br/>
      <label htmlFor="DOB">DOB</label>
      <input type="date" name="DOB" id="DOB" onChange={handleChange} value={data.DOB} /><br/>
      <h3>Gender</h3>
      <div className="gender" onChange={handleChange}>
        <input type="radio" name="gender" id="Male" value={'Male'} /> male <br />
        <input type="radio" name="gender" id="Female" value={'Female'} />Female <br />
        <input type="radio" name="gender" id="other" value={'other'} />other <br />
      </div>
      <h2>Skiils</h2>
      <div className="skills" onChange={handleChangeSkills}>
        <input type="checkbox" name="skills" id="React" value={'React'} /> react <br />
        <input type="checkbox" name="skills" id="javascript" value={'javascript'} />javascript <br />
        <input type="checkbox" name="skills" id="sql" value={'sql'} /> Sql <br />
        <input type="checkbox" name="skills" id="sdlc" value={'sdlc'} /> sdlc
      </div>
      <select name='country' id='country' onChange={handleChange}>
        {Country.map((v,i)=>{
          let {code, name} =v;
          return (
            <option value={name} key={code}>
              {name}
            </option>
          )
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App8;

