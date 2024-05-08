import React, { Component } from 'react'

export default class App9 extends Component {
    constructor(){
        super();
        this.state = {name:'XYZ'};
        console.log('Constructor')
    }
    static getDerivedStateFromProps(prop,state){
        console.log(prop,state)
        console.log("get derived state from props method")
        return null;
    }

    componentDidMount(){
        console.log("Mounted");
    }

    shouldComponentUpdate(){
        console.log('Should component update method')
        return true
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log(prevProp,prevProp)
        console.log('getSnapshotBeforeUpdateFunction')
        return prevState;
    }
    componentDidUpdate(prop,state,data){
        console.log(prop,state)
        console.log(data)
        console.log('ComponentDidUpdate')
    }
    
  render() {
    console.log('render method')
    return (
      <>
        <h1>hello world</h1>
        <h2>{this.state.name}</h2>
        <button onClick={(e)=>{
            this.setState({name:'yyy'})
        }}>change </button>
      </>
    )
  }
}
