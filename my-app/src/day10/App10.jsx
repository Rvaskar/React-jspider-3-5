// import React, { Component } from "react";
// import Child from "./Child";
// import './style10.css'

// export default class App10 extends Component {
//   constructor() {
//     super();
//     this.state = { data: [] };
//   }
//   componentDidMount() {
//     console.log("mounting");
//     let data = window.fetch("https://fakestoreapi.com/products");

//     data.then(
//       (d) => {
//         d.json().then(
//           (v) => {
//             this.setState({ data: v });
//           },
//           (e) => {
//             console.log(e);
//           }
//         );
//       },
//       (e) => console.log(e)
//     );
//   }

//   componentDidUpdate() {
//     console.log("component updated");
//   }
//   render() {
//     let { data } = this.state;
//     console.log(data)
//     return (
       
//       <div className="container-tab">
//          {/* <Child/> */}
//         <table>
//           <thead>
//             <tr>
//               <td>ID</td>
//               <td>Title</td>
//               <td>Description</td>
//               <td>Category</td>
//               <td>Image</td>
//               <td>Rating</td>
//               <td>Price</td>
//             </tr>
//           </thead>
       
//         <tbody>
//           {data.map((v) => {
//             let { title, id,description,category,image,price,rating } = v;
//             return (
//               <tr key={id}>
//                 <td>{id}</td>
//                 <td>{title.slice(0,60)}</td>
//                 <td>{description.slice(0,60)} ...</td>
//               <td>{category}</td>
//               <td><img src={image} alt="" /></td>
//               <td>{rating.rate}</td>
//               <td><h3>RS. {price}</h3></td>
//               </tr>
//             );
//           })}
//         </tbody>
//         </table>
//       </div>
//     );
//   }
// }

import React from 'react'
import Child from './Child'

const App10 = () => {
  return (
    <div>
      <Child/>
    </div>
  )
}

export default App10
