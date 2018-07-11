import React, { Component } from 'react';
import './../App.css';

class Header extends Component {
  render() {
    return (
     <div className="header">
       <h1 className="header__title">STUDENT RECORD CARD</h1>
       <h2 className="header__subtitle">on Facebook</h2>
     </div>
    );
  }
}

export default Header;
