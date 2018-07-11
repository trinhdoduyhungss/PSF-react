import React, { Component } from 'react';

class ClockTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 60
        }
        console.log('constructor')
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.downNumber()
        if (nextState.number === -1) {
            clearTimeout(this.timeout)
            return false
        }
        return true
    }

    componentDidMount() {
        this.downNumber()
    }

    downNumber = () => {
        this.timeout = setTimeout(() => {
            this.setState(preState => ({
                number: preState.number - 1
            }))
        }, 1000)
    }

    render() {
        return (
            <label>{this.state.number}</label>
        )
    }

}
export default ClockTime