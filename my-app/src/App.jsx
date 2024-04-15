// import React, { Component } from 'react'

// class App extends Component{
//     render(){
//         return(
//             <>
//             <p>we inherient componant beacause we have to use render method which in componant object</p>
//             <h1>this is class base componant</h1>
//             </>
//         )
//     }

// }

// export default App;
//! DAY 3 
// import React, { Component } from 'react'

// export default class App extends Component {

//     //  {/* state = 100 */}
//      state = {
//         name : 'sachin',
//         age: 25 
//     }

//     constructor(){
//         super();
//         this.state = {
//             name : 'sachin',
//             id: 25 
//         }
//     }
//   render() {
//     return (
//       <>
//        <h1>name : {this.state.name}</h1>
//        <h2>ID: {this.state.id}</h2>
//       </>
//     )
//   }
// }

//! second example

// import react, { Component } from "react";

// class App extends Component{
//     state = {
//         employee : [
//             {
//             name: "sachin",
//             id: 123,
//             skills: ['js','react','node','express'],
//             designation : 'jr Devloper'
//         },
//         {
//             name: "sager",
//             id: 13,
//             skills: ['js','react',],
//             designation: "manager"
//         }
//     ]
//     }
//     render(){
//         return (
//             <>
//             <h1>displaying details</h1>
//             {
//                 this.state.employee.map((v,i )=> {
//                     return(
//                         <>
//                         <h2> Emp Name: {v.name}</h2>
//                         <h3>emp ID {v.id}</h3>
//                 </>
//                     )
                    
//                 }
//                 )
//             }

//             </>

//         )
//     }
// }

// export default App;


//! class based componant with increament add 


import React,{Component} from "react";

class App extends Component{
    state = {count:0}
    Increament =()=>{
        this.setState({count:this.state.count+1})
    }
    Decrement =()=>{
        this.setState({count:this.state.count-1})
    }
    Reset =()=>{
        this.setState({count:0})
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
      <section>
        <button onClick={this.Increament}>Increament</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </section>
            </>
        )
    }
}

export default App