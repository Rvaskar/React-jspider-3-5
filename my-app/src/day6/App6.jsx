import React,{useState} from 'react'
import Child6 from './Child6'

const App6 = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Child6 loggedIn={isLoggedIn} />
    </div>
  )
}

export default App6
