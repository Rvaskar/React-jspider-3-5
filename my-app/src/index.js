import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import Task2 from './Task2';

// import App from './App';
// import Task from './Task';
// import App2 from './App2';
// import Task from './Task';

import Prac1 from './classComponant/Prac1';


//! 8/04/2024---------day1
// let root = document.getElementById('root')

// let x = ReactDOM.createRoot(root);
// console.log(React)
// console.log(ReactDOM)

// let h1 = createElement("div", {id:'head'}, "Ract Js")

// x.render(h1)

//!10/04/2024----------day2



// let root = document.getElementById('root')

// let x = ReactDOM.createRoot(root);
// let ar = ['sachin','dhoni','riyan parag', 'hardik']
// let name = 'sachin'

// // let h1 = <h1>Hello world</h1>
// let section =(
//     <>
//     <div>this is div</div>
//     <section id='s1' style={{background:'hotpink'}}>
//         this is section tag
//     </section>
//     <h1>the sum of 10 + 10 = {10+10}</h1>
//     <ul>
//     {
//         ar.map((e)=>{
//                 return <li>{e}</li>
//             })
//         }
//         </ul>
//         <h2>the name is {name}</h2>

//         <form>
//             <label htmlFor="username">UserName</label>
//             <input type="text" id='username' />
//             <label htmlFor="password"> Password</label>
//             <input type="password" name="password" id="password" />
//         </form>
//     </>
// )


// x.render(section)


//! class comp

createRoot(document.getElementById('root')).render(<Task2 />)