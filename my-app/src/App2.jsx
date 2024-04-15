//! day 3 >  13 /04

// import React,{useState} from 'react'

// export default function App2() {
//     // console.log(React)
//     let x = useState('sachin')
//     let y = useState(121)


//   return (
//     <>
//     <h1>name : {x[0]}</h1>
//     <h1>id : {y[0]}</h1>
      
//     </>
//   )
// }


// import React,{useState} from "react";

// const App2 = ()=>{
//     let [user, setUser] = useState({ name: "Rohit", id: 45 });

//     setTimeout(() => {
//         setUser({ name: "Virat", id: 30 })
//     }, 5000);


//     return(
//         <>
//         <h1>name: {user.name}</h1>
//         <h1>Id: {user.id}</h1>
//         </>
//     )
// }

// export default App2;


import React , {useState} from 'react'

export default function App2() {
    let [count, setCount] = useState(0)
    let Increament =()=>{
        setCount(count+1)
    }
    let Decrement =()=>{
        setCount(count-1)
    }
    let Reset =()=>{
        setCount(0)
    }
  return (
    <>
      <h1>{count}</h1>
      <section>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </section>
    </>
  )
}
