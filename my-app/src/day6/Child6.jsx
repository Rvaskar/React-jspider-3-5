// //! conditional rendering
// import React from 'react'

// const Child6 = ({loggedIn}) => {
//   if(loggedIn)
//   return (
//   <ul>
//     <li>Home</li>
//     <li>Products</li>
//     <li>Blogs</li>
//     <li>Sachin</li>
//     <li>Logout</li>
//   </ul>
//   );
//   else
//   return(
// <ul>
//     <li>Home</li>
//     <li>Products</li>
//     <li>Blogs</li>
//     <li>SignUP</li>
//     <li>LogIn</li>
//   </ul>

//   )
// }


// export default Child6

//!ternary Operator
// import React, { useState } from 'react'
// import { IoIosNotifications } from "react-icons/io";

// const Child6 = (loggedIn) => {
//     let [notification, setNotification] = useState([
//             'xyz send you message',
//             'x likes your video'

//     ])
//     let Guest =()=>{
//         return(
//             <>
//             <li>SignUp</li>
//             <li>LogIN</li>
//             <li>
                
//             <IoIosNotifications />
//             <sup>{notification.length > 0 && notification.length}</sup>
//             </li>
//             </>
//         )
//     }
    
//     let User =()=>{
//         return(
//             <>
//             <li>Sachin</li>
//             <li>LogOut</li>
//             <li>
                
//             <IoIosNotifications />
//             <sup>{notification.length > 0 && notification.length}</sup>
//             </li>
//             </>
//         )
//     }

//   return (
    
//       <ul>
//       <li>Home</li>
//     <li>Products</li>
//     <li>Blogs</li>
//     {loggedIn?<Guest />: <User/>}
//       </ul>
  
//   )
// }

// export default Child6

//! Switch Case

// import React from 'react'

// const Child6 = ({loggedIn}) => {
 
//    switch (loggedIn) {
//     case true:
//        return(
//         <ul>
//             <li>Home</li>
//     <li>Products</li>
//     <li>Blogs</li>
//     <li>Sachin</li>
//     <li>Logout</li>
//         </ul>

//        )
//     case false:
//        return(
//         <ul>
//             <li>Home</li>
//     <li>Products</li>
//     <li>Blogs</li>
//     <li>Sign IN</li>
//     <li>LogIN0</li>
//         </ul>

//        )
//    }
  
// }

// export default Child6
//! practice

// import React from "react";

// const Child6 = ({loggedIn})=>{
//     console.log(loggedIn)
//     if(loggedIn){
//         return (
//             <ul>
//                 <li>User</li>
//                 <li>SignOut</li>
//                 <li>info</li>
//             </ul>
//         )
//     }else{
//         return(
//              <ul>
//         <li>
//             SignIn
//         </li>
//         <li>LogIN</li>
//         <li>About</li>
//         </ul>
//     )
//     }
// }

// export default Child6;


import React from 'react'

const Child6 = () => {
    let demo = (a)=>{
        console.log(a)
    }
  return (
    <>
      <button type="button" onClick={()=>{demo(10)}}>click</button>
    </>
  )
}

export default Child6
