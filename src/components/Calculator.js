import React, { useState } from 'react';
import calculate from '../logic/Calculate';
import './Calculator.css';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.innerHTML;
    setObj((currentState) => calculate(
      {
        total: currentState.total,
        next: currentState.next,
        operation: currentState.operation,
      },
      buttonName,
    ));
  };

  const { total, next, operation } = obj;
  return (

    <div className="App">
      <h2 className="intro">Lets do some math!</h2>
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
          <button onClick={handleClick} type="button">AC</button>
          <button onClick={handleClick} type="button">+/-</button>
          <button onClick={handleClick} type="button">%</button>
          <button onClick={handleClick} type="button" className="colour">÷</button>
          <button onClick={handleClick} type="button">7</button>
          <button onClick={handleClick} type="button">8</button>
          <button onClick={handleClick} type="button">9</button>
          <button onClick={handleClick} type="button" className="colour">x</button>
          <button onClick={handleClick} type="button">4</button>
          <button onClick={handleClick} type="button">5</button>
          <button onClick={handleClick} type="button">6</button>
          <button onClick={handleClick} type="button" className="colour">-</button>
          <button onClick={handleClick} type="button">1</button>
          <button onClick={handleClick} type="button">2</button>
          <button onClick={handleClick} type="button">3</button>
          <button onClick={handleClick} type="button" className="colour">+</button>
          <button onClick={handleClick} type="button" className="btn">0</button>
          <button onClick={handleClick} type="button">.</button>
          <button onClick={handleClick} type="button" className="colour">=</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
