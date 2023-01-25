import React from "react";
class Calculator extends React.Component {
 
render(){
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>

        <div className="control">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="colour">÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="colour">x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="colour">-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="colour">+</button>
          <button className="btn">0</button>
          <button>.</button>
          <button className="colour">=</button>
        </div>

        

      </div>
    </div>
  );
}
}


export default Calculator;
