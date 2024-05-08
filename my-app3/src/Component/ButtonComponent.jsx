import React from 'react'

const ButtonComponent = ({increamentFn,children}) => {
    console.log('button - ' + children)
  return (
    <>
      <button onClick={increamentFn}>{children}</button>
    </>
  )
}

export default React.memo(ButtonComponent)
