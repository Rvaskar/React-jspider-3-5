// import react, { useMemo, useState } from 'react'

// function App() {
//   let [count, setCount] = useState(0);
//   let [black, setBlack] = useState(false);

//   let doubleNumber = useMemo(()=>{
//     return slowFunction(count)
//   },[count])

//   let handleClick = (e)=>{
//     setBlack((prev)=>!prev)
//   }
//   let handleStyle = {
//     background: black ? "#111": "#fff",
//     color: black ? "#fff": "#111"
//   }

//   return (
//     <div className="App">
//       <input type="number" name="num" id="num" placeholder='Enter Number' onChange={(e)=> setCount(e.target.value)}  /> <br />
//       <button type="button" onClick={handleClick}>Change Color</button>
//       <h1 style={handleStyle}>{doubleNumber}</h1>

//     </div>
//   );
// }

// let slowFunction=(num)=>{
//   for(let i=0; i<100000000; i++){}
//   return num*2
// }

// export default App;

// import React, { useCallback, useState } from 'react'
// import Title from './Component/Title';
// import Counter from './Component/Counter';
// import ButtonComponent from './Component/ButtonComponent';

// const App = () => {

//   let [age, setAge] = useState(25);
//   let [salary, setSalary] = useState(10000);

//   let increamentAge = useCallback(()=> setAge((prev) => prev + 1), [age]);
//   let increamentSalary = useCallback(()=> setSalary((p)=> p +1000),[salary])
//   return (
//     <div>
//       <Title/>
//       <Counter text={"age"} count={age} />
//       <ButtonComponent increamentFn={increamentAge}>
//         Increment Age
//       </ButtonComponent>
//       <Counter text={'salary'} count={salary} />
//       <ButtonComponent increamentFn={increamentSalary}>
//         Increament salary
//       </ButtonComponent>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Salary from './Component/Salary';

const App = () => {
  return (
    <>
      <Salary>
        <h2>hello</h2>
        <p>how are you</p>
      </Salary>
    </>
  )
}

export default App
