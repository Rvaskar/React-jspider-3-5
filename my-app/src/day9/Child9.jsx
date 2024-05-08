import React, { Component } from 'react'


export default class Child9 extends Component {
  componentWillUnmount(){
    console.log('component will unmount')
  }
  render() {
    return (
      <>
        <h1>This is child component</h1>
      </>
    )
  }
}
