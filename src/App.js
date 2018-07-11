import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MProduct from './components/Mproduct';
import Header from './header';
import Intro from './intro';
import Form from './components/Form';
import ClockTime from './components/clocktime';
class App extends Component {  
  render() {
    return (
      <div className="App">
        <Header name='some' job="students" />
        <Intro ratio='2-1' />
        <Form />
        <ClockTime/>
        <MProduct/>
      </div>
    );
  }
}

export default App;
