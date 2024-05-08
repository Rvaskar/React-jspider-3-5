import React from 'react'

const Counter = ({text, count}) => {
    console.log("counter -" + text);
  return (
    <div>
      <h1>
        {text} - {count}
      </h1>
    </div>
  )
}

export default React.memo(Counter);
