import React, { Component } from 'react';
import Counter from './counter'
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { counters: 1 }
    
    this.renderCounters = this.renderCounters.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  renderCounters(counts) {
    let counterArrya = [];
    for(let i=0; i<counts; i++) {
      counterArrya.push(i+1);
    }
    const listItems = counterArrya.map((number) => {
      return <li key={number}><Counter /></li>
    });
    return (
      <ul>{listItems}</ul>
    );
  }

  addCounter() {
    this.setState({
      counters: this.state.counters + 1,
    });
  }

  removeCounter() {
    if(this.state.counters === 0) {
      alert('All the counters are removed');
    }
    else {
      this.setState({
        counters: this.state.counters - 1,
      });      
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.renderCounters(this.state.counters)}
        </div>
        <button onClick={this.addCounter}>Add Counter</button>
        <button onClick={this.removeCounter}>Remove Counter</button>
      </div>
    );
  }
}

export default App;
