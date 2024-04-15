import React,{Component} from 'react'

class Prac1 extends Component{
    state = {
        name:'rutik'
    }
    change=()=>{
      if(this.state.name==="rutik"){ 
         this.setState({name:'Ram'})
      }else if(this.state.name ==='Ram'){
        this.setState({name:'rutik'})
      }
    }
    render(){
        return(
            <>
            <h1>hello</h1>
            <h2>{this.state.name}</h2>
            <button onClick={this.change}> click </button>
            </>
        )
    }
}

export default Prac1;