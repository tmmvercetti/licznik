import React, { Component } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';

import './App.css';


class App extends Component {

  constructor(){
    super(); 
    this.state = { 
      count : 0,  
      level : 1,
      levelFlag : 10
    } 
  }

  countUp = () => {
    // console.log('test');
    this.setState((prevState)=>{
      if((prevState.count+1) %this.state.levelFlag !== 0){ 
        return({
          count: ++prevState.count
        });
      } else {
        return({
          count: ++prevState.count,
          level: ++prevState.level,
          levelFlag: prevState.levelFlag *2
        });
      }
      
    });
    
  }

  render() {
    return (
      
      <div className="App">
        <Button  addCount={this.countUp}/> 
        <Counter count={this.state.count} level={this.state.level}/>
      </div>            // ten state pobierany jest z góry pod constructorem z this.state
    );
  }
}

export default App;

