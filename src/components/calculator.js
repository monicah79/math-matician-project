function calculator() {
  const createDigit = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>{i}</button>,
      );
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>

        <div className="control">
          <button>AC</button>
          <button>*</button>
          <button>+/-</button>
          <button>/</button>
        </div>

        <div className="digits">
          { createDigit() }
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>

      </div>
    </div>
  );
}

export default calculator;
