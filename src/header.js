import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  renderLogo = () => (
    <img src={logo} className="App-logo" alt="logo" />
  )
  render() {
    console.log('prop', this.props);
    return (
        <header className="App-header">
            {this.renderLogo()}
            <h1 className="App-title">{this.props.name}</h1>
            <h2 className="App-title">{this.props.job}</h2>
        </header>
    );
  }
}

export default Header