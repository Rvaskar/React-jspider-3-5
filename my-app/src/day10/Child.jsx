// import React,{useState, useEffect} from 'react'

// const Child = () => {
//     let [count, setCount] = useState(0)
//     let [text, setText] = useState("web Tech")
//     useEffect(()=>{
//         console.log('component mounted')

//         return ()=>{
//             console.log('unmounting')
//         }
//     },[])
//     let Decrement = () => { setCount(count - 1)}
//     let Increment = () => { setCount(count + 1)}
//   return (
//     <div>
//       <h1>{count}</h1>
//       <h1>{text}</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <button onClick={(e)=>setText('react')}>Change text</button>
//     </div>
//   )
// }

// export default Child


// import React,{useState, useEffect}  from 'react'

// const Child = () => {
//     let [data,setData] = useState([]);
//     useEffect(()=>{
//         let x = window.fetch("https://fakestoreapi.com/products");

//     x.then(
//       (d) => {
//         d.json().then(
//           (v) => {
//             setData(v);
//             console.log(v)
//           },
//           (e) => {
//             console.log(e);
//           }
//         );
//       },
//       (e) => console.log(e)
//     );
//     },[])
//   return (
//     <div>
//       {data.map((v,i)=>{
//         return <h3 key={i+1}>{v.title}</h3>
//       })}
//     </div>
//   )
// }

// export default Child

import React ,{useState, useEffect}  from 'react'

const Child = () => {
    console.log(window.innerWidth)
    let [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',(e)=>{
            setWidth(window.innerWidth)
        })
    },[width])
  return (
    <div>
      {width}
    </div>
  )
}

export default Child
