import React, { Component } from 'react';
import './App.css';
import Cards from './compoments/cards'
import Header from './compoments/header'
class App extends Component {
  render() {
    return (
     <div className="wrapper">
       <Header/>
       <Cards/>
     </div>
    );
  }
}

export default App;
