// import React, { Component, createRef } from 'react'

// export default class App7 extends Component {
//     constructor(){
//         super()
//         this.divRef = createRef()
//     }
//     handleClick =(e)=>{
//         this.divRef.current.style.background = 'red';
//     }
//   render() {
//     return (
//       <div className='container' ref={this.divRef} onClick={this.handleClick}>
//         hello world
//       </div>
//     )
//   }
// }


// //! in function based Componant
// import React, { useRef } from 'react'

// const App7 = () => {
//     let divRef = useRef()
//     let handleClick=()=>{
//         divRef.current.style.background='blue'

//     }
//   return (
//     <div>
//       <div className='container' ref={divRef} onClick={handleClick}>
//         hello world
//       </div>
//     </div>
//   )
// }

// export default App7


 //! How to controlled the media  player
// import React,{useRef, useState} from 'react'

// const App7 = () => {
//     let videoRef = useRef()
//     let [text, setText] = useState("")
//     let [play, setPlay] = useState(false)

//     let handleClick = (e)={
//         setPlay(play=true);
//         if(play){
//             videoRef.current.play();
//             setText('video is Playing');
//         }else{
//             videoRef.current.pause();
//             setText("");
//         }
//     }
//   return (
//     <>
//       <h1>{text}</h1>
//       <video src='' style={{height:"200px", width:'300px'}}  ref={videoRef}  onClick={handleClick}></video>
//     </>
//   )
// }

// export default App7

//!uncontrolled componant form
import React, { Component ,createRef} from 'react'

export default class App7 extends Component {
    constructor(){
        super();
        this.username = createRef()
        this.password = createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let u = this.username.current.value;
        let p = this.password.current.value;
        console.log(u,p)

    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='username' id='username' placeholder='Enter username'  ref={this.username} />
        <input type="password" name='password' id='password' placeholder='Enter password'  ref={this.password} />
        <button type='submit'> Submit</button>
      </form>
    )
  }
}


