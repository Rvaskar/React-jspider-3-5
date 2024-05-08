import React, { Component } from 'react'
import Child9 from './Child9'

export default class Nav9 extends Component {
    constructor(){
        super();
        this.state = {display:false}
    }
    handleClick =(e)=>{
        this.setState({display: !this.state.display})
    }
  render() {
    let {display} = this.state
    return (
      <>
        <h1>Parent Component</h1>
        {display? <Child9/>:null}
        <button onClick={this.handleClick}>click</button>
      </>
    )
  }
}
