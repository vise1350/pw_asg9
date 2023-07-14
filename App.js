import React, { useState } from "react";
import "./style.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleOperation = (operation) => {
    const calculation = eval(input + operation);
    setResult(calculation);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        placeholder="Enter your calculation"
        className="input"
        onChange={handleChange}
      />
      <button className="button" onClick={handleClear}>Clear</button>
      <button className="button" onClick={() => handleOperation("+")}>+</button>
      <button className="button" onClick={() => handleOperation("-")}>-</button>
      <button className="button" onClick={() => handleOperation("*")}>*</button>
      <button className="button" onClick={() => handleOperation("/")}>/</button>
      <h2 className="result">Result: {result}</h2>
    </div>
  );
}

export default Calculator;
