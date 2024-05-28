import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    const inputValue = parseFloat(inputRef.current.value) || 0;

    switch (operation) {
      case 'add':
        setResult((prevResult) => prevResult + inputValue);
        break;
      case 'subtract':
        setResult((prevResult) => prevResult - inputValue);
        break;
      case 'multiply':
        setResult((prevResult) => prevResult * inputValue);
        break;
      case 'divide':
        setResult((prevResult) => prevResult / inputValue);
        break;
      default:
        break;
    }
  };

  const resetInput = () => {
    inputRef.current.value = "";
  };

  const resetResult = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <h1>My Calculator</h1>
      <div className="calculator">
        <div className="display">{result}</div>
        <input ref={inputRef} type="number" placeholder="Enter a number" />
        <div className="buttons">
          <button onClick={() => handleOperation('add')}>+</button>
          <button onClick={() => handleOperation('subtract')}>-</button>
          <button onClick={() => handleOperation('multiply')}>*</button>
          <button onClick={() => handleOperation('divide')}>/</button>
        </div>
        <div className="buttons">
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </div>
    </div>
  );
}

export default App;
