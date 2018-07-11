import React, { Component } from 'react';
import './App.css';

class Intro extends Component {

    render() {
      return (        
          <div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p> Brazill-Mexico </p>
            <p> {this.props.ratio} </p>
          </div>
      );
    }
  }
  
  export default Intro;