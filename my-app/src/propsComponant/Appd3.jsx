// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'

// export default function Appd3() {
//   return (
//     <div>
//       <Navbar />
//       <Footer />

//     </div>
//   )
// }

//!props

// import React from 'react'
// import Child from './Child'

// export default function Appd3() {
//   return (
//     <div>
//       <Child username="sachin" id={100} skills={['python','sql']}  />
//       <Child username="Rohit" id={45} skills={['js','react']} />
//     </div>
//   )
// }

//! props.children

import React from "react";
import Child from "./Child";

export default function Appd3() {
  return (
    <>
    <Child id={1} />
      <Child>
        <h1>Hello I am Sachin</h1>
      <h2>second tag</h2>
      </Child>
    </>
  );
}
