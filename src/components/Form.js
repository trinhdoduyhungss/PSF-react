import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vnd: '',
      usd: ''
    }
  }

  onChangeText = (event, currency) => {    
    const input = event.target.value;
    const currencyConverted = currency === 'vnd' ? 'usd' : 'vnd' ;
    const result = currency === 'vnd' ? input/20000 : input*20000
    this.setState({
        [currency]: event.target.value,
        [currencyConverted]: result
    })
  }

  convert = () => {
    this.usd.value = this.vnd.value / 20000
  }

  render () {
    return (
      <div style={{marginTop: 20}}>
        <div>
          <input 
            // type="text"
            // value={this.state.vnd}
            // onChange={(event) => this.onChangeText(event, 'vnd')}
            ref={(event) => this.vnd = event}
          />
          <span>VND</span>
          <button type='button' onClick={this.convert}>Convert</button>          
        </div>

        <div>
          <input 
            type="text"
            ref={(event) => this.usd = event}
            // value={this.state.usd}            
            // onChange={(event) => this.onChangeText(event, 'usd')}
          />
          <span>USD</span>
        </div>
      </div>
    )
  }
}

export default Form