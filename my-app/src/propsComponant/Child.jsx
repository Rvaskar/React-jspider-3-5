//! Function based child componant

// import React from 'react'

// export default function Child(props) {
//   return (
//     <div>
//       <h1>username: {props.username}</h1>
//       <h2>Id : {props.id}</h2>
//       <h3> Skills: 
//         <ul>
//             {props.skills.map((skill)=><li>{skill}</li>)}
//         </ul>
//       </h3>
//     </div>
//   )
// }


//! Class Based Child Componant

// import React, { Component } from 'react'

// class Child extends Component {
//   render() {
//       let {username,id,skills} = this.props
//     return (
//       <div>
//         <h1>username : {username}</h1>
//         <h2>id : {id}</h2>
//         <h3>skills : <ol>
//         {skills.map(e=><li>{e}</li>)}</ol></h3>
//       </div>
//     )
//   }
// }
// export default Child

import React from 'react'

export default function Child(props) {
  console.log(props)

  return (
    <div>
      {props.children}
      <h1>hello</h1>
    </div>
  )
}



