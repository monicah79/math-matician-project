import React from 'react';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.innerHTML;
    this.setState((currentState) => calculate(
      {
        total: currentState.total,
        next: currentState.next,
        operation: currentState.operation,
      },
      buttonName,
    ));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <div className="calculator">

          <div className="display">
            <span>
              {total}
              {' '}
              {operation}
              {' '}
              {next}

            </span>
          </div>

          <div className="control">
            <button onClick={this.handleClick} type="button">AC</button>
            <button onClick={this.handleClick} type="button">+/-</button>
            <button onClick={this.handleClick} type="button">%</button>
            <button onClick={this.handleClick} type="button" className="colour">÷</button>
            <button onClick={this.handleClick} type="button">7</button>
            <button onClick={this.handleClick} type="button">8</button>
            <button onClick={this.handleClick} type="button">9</button>
            <button onClick={this.handleClick} type="button" className="colour">x</button>
            <button onClick={this.handleClick} type="button">4</button>
            <button onClick={this.handleClick} type="button">5</button>
            <button onClick={this.handleClick} type="button">6</button>
            <button onClick={this.handleClick} type="button" className="colour">-</button>
            <button onClick={this.handleClick} type="button">1</button>
            <button onClick={this.handleClick} type="button">2</button>
            <button onClick={this.handleClick} type="button">3</button>
            <button onClick={this.handleClick} type="button" className="colour">+</button>
            <button onClick={this.handleClick} type="button" className="btn">0</button>
            <button onClick={this.handleClick} type="button">.</button>
            <button onClick={this.handleClick} type="button" className="colour">=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
