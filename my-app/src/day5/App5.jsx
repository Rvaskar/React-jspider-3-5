//! prop drilling

// import React from 'react'
// import Child5 from './Child5'


// const App5 = () => {
//   return (
//     <>
//       <Child5 username='XYZ' id={123} />
//     </>
//   )
// }

// export default App5


//~ ---------------------------------------------------------------
//propTypes


// import React from 'react'
// import Child from './Child'

// const App5 = () => {
//   return (
//     <>
//       <Child username='ram' id={123} />
//       <Child username='ram' id={125} />
//       <Child username='ram' id={123} />
//     </>
//   )
// }

// export default App5

//! list and keys
// import React, { useState } from 'react'
// import Data from '../data.json'

// const App5 = () => {
//     let [products, setProducts] = useState(Data)
//   return (
//     <>
//       <ul>
//         {
//             products.map((v,i)=>{
//                 return <li key={v.id}>{v.title} </li>
//             })
//         }
//       </ul>
//     </>
//   )
// }

// export default App5

//! Handle Event

// import React from 'react'

// const App5 = () => {
//     let handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log(e.target[0].value)
//     }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" id='username' name='username' />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }

// export default App5

//! Passing argument to event handle functio

import React from 'react'

const App5 = () => {
    let handleClick = (username,id)=>{
        console.log(username)
        console.log(id)
    }
  return (
    <>
      <button onClick={(e)=>{
        handleClick('abc',120)
      }}>Click me</button>
    </>
  )
}

export default App5

