import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {

  constructor(){
    super()
    
    // State
    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    }

    // Metodos
    this.handleCount = this.handleCount.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this)

  }

  componentDidMount(){
    this.setState({
      count: 1
    });
  }

  handleCount(e) {

    if (e.target.id === "add") {
      this.setState({
        count: this.state.count + 1
      })
    }

    else if (e.target.id === "substract" && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }

    else if (e.target.id === "reset" && this.state.count !== 0) {
      this.setState({
        count: 0
      })
    }
  }

  handleResultClick(e) {
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  handleInputChanged(e) {
    if (e.target.id === "number1") {
      this.setState({
        number1: Number(e.target.value)
      })
    }

    else if (e.target.id === "number2") {
     this.setState({
       number2: Number(e.target.value)
     }) 
    }

  }

  render() {
    console.log(`se ejecuta el render ${this.state.count}`)
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>

        <p>
          <button id="add" onClick={this.handleCount} > + </button>
          <button id="substract" onClick={this.handleCount} > - </button>
          <button id="reset" onClick={this.handleCount} > Reset </button>
        </p>

        <h2>Calculator</h2>
        <p>
          <input type="number" id="number1" value={this.state.number1} onChange={this.handleInputChanged} />
          +
          <input type="number" id="number2" value={this.state.number2} onChange={this.handleInputChanged} />
          <button id="result" onClick={this.handleResultClick}>=</button>
           {this.state.result}

        </p>
      </div>
    );
  }
}

export default Content;
