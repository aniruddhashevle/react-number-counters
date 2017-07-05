import React, { Component } from 'react';
import './app.css';

class Counter extends Component {

	constructor(props) {
		super(props);

		this.state = { countNumber: 0 }
		
		this.counterPlus = this.counterPlus.bind(this);
		this.counterMinus = this.counterMinus.bind(this);
	}

	counterPlus() {
		this.setState({
			countNumber: this.state.countNumber + 1
		});
	}

	counterMinus() {
		this.setState({
			countNumber: this.state.countNumber - 1
		});
	}

  render() {
    return (
      <div className="counter-container">
      	<h3>{this.state.countNumber}</h3>
      	<button onClick={this.counterPlus}>+</button>
      	<button onClick={this.counterMinus}>-</button>
      </div>
    );
  }
}

export default Counter;
