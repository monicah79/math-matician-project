import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>

          <div className="control">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="colour">÷</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="colour">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="colour">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="colour">+</button>
            <button type="button" className="btn">0</button>
            <button type="button">.</button>
            <button type="button" className="colour">=</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
