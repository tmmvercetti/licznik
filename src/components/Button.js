import React, { Component } from 'react';
import '../App.css';

class Button extends Component {

  
    updateCounter = () =>{
        // console.log('test');
        this.props.addCount(); 
    }

  render() {

    console.log(this.props); 

    return ( 
      <button onClick={()=>{this.updateCounter()}}>
          licz      
      </button>
    );
  }
}

export default Button;