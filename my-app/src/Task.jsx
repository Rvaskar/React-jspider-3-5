import React, { Component } from 'react'
import products from './data.json'


export default class Task extends Component {
    constructor(){
        super();
        this.state = {
            data: products
        }
    }


    

  render() {
    return (
      <div className='container'>
        {this.state.data.map((v,i)=>{
            let {id,title,price,description,category,image}=v;
            return (
              <>

              <div className='card' key={i}>
              <div className='image'>
                <img src={image} alt="" />
                </div>
              <h2>{title}</h2>
              <h4>{description.slice(0,50)}...</h4>
              <h3>RS. {price*68}</h3>
              {/* <p>{category}</p> */}

              <button className='btn'>Add to Cart</button>
              </div>

              </>
            )
        })}
      </div>
    )
  }
}
