// import React,{useState} from 'react'
// import Child from './Child'
// import Products from '../data.json'

// const App4 = () => {
//     let [details, setDetails] = useState([
//         {
//             name:'xyz',
//             id: 123
//         },
//         {
//             name:'pqy',
//             id:300
//         }

//     ])

//   return (
//     <>
//     <h1>hey</h1>
//     <Child pro={()=>100} data={Products} empDetails={details} />
//     </>
//   )
// }

// export default App4

//! how to set default prop
// import React from 'react'
// import Child from './Child'

// const App4 = () => {
//   return (
//     <>
//       <Child username='sashi' id={120} company='yyy' />
//       <Child username='sashi' id={120} />
//       <Child username='sashi'  company='xyz' />
//     </>
//   )
// }

// export default App4


//! how to transfer the data from the child to parent componant

// import React,{useState} from 'react'
// import Child from './Child'


// const App4 = () => {
//     let [data,setData] = useState('')
//     let demo=(v)=>{
//         setData(v)
//     }
//   return (
//     <>
//     <h1>Parent Componant</h1>
//     <h2>Child data {data}</h2>
//       <Child setDataToChild= {demo} />
//     </>
//   )
// }

// export default App4

//! Task
import React from 'react'
import Child from './Child'

const App4 = () => {
  return (
    <>
      <Child username='rutik' id={1} company='xs' />
      <Child username='rutik' id={1} />
      <Child username='rutik'  company='xs' />
    </>
  )
}

export default App4


