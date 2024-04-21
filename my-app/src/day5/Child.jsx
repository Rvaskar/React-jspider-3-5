import React from 'react'
import { PropTypes } from 'prop-types'

const Child = ({username,id}) => {
  return (
    <>
      <h1>username: {username}</h1>
      <h2>id = {id}</h2>
    </>
  )
}
Child.propTypes = {
    username: PropTypes.string,
    id: PropTypes.number,
}

export default Child
