// import React from 'react'

// const Child = ({pro,data,empDetails}) => {
    
//   return (
//     <>
//     <h2>hey</h2>
//       <h1>{pro()}</h1>
//       <ol>
//         {data.map((v,i)=>{
//             return <li>{v.title}</li>
//         })}
//       </ol>

//       {empDetails.map((v,i)=>{
//         return(
//             <>
//             <h1>{v.name}</h1>
//             <h2>{v.id}</h2>
//             </>
//         )
//       })}

//     </>
//   )
// }

// export default Child

//! setting default value to props

// import React, { Component } from 'react'
// // static defaultProps = {username: "NA" , id: "NA" , company:"NA"}

// export default class Child extends Component {
//   render() {
//     let {username,id,company}=this.props
//     return (
//       <>
//         {/* first way */}
//         {/* <h1>user: {username || 'NA'}</h1>
//         <h2>id: {id || 'NA'}</h2>
//         <h3>Company: {company || 'NA'}</h3> */}
//         <h1>user: {username}</h1>
//         <h2>id: {id}</h2>
//         <h3>Company: {company}</h3>
//       </>
//     )
//   }
// }

// Child.defaultProps={username: "NA" , id: "NA" , company:"NA"}


//!sending Data child to Data
// import React,{useState} from 'react'

// const Child = ({setDataToChild}) => {
//   let [user,setUSer] = useState("")
//   let handleChange = (e)=>{
//       setUSer(e.target.value)
//   }

//     let handleClick = (e)=>{
//       setDataToChild(user)
//     }
    
//   return (
//     <>
//     <input type="text" id='username' name='username
//     ' onChange={handleChange} value={user} />
//     <button onClick={handleClick}>Click</button>
      
//     </>
//   )
// }

// export default Child


//! Task
import React from 'react'

const Child = ({username, id, company}) => {

  return (
    <>
      {/* <h1>user: {username || 'NA'}</h1>
      <h2>id: {id || 'NA'}</h2>
      <h3>company : {company || 'NA'}</h3> */}
      <h1>user: {username}</h1>
      <h2>id: {id}</h2>
      <h3>company : {company}</h3>
    </>
  )
};

Child.defaultProps = {username: 'NA', id:'NA', company:'NA'}

export default Child


