    
import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
  render() {

      console.log(this.props); 

    return (
      <div>
          ilosc kliknięć {this.props.count}, poziom {this.props.level}
      </div>               
    );
  }
}

export default Counter;