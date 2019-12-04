import React, { useState, useEffect } from 'react';


const intAvailable = [1,2,3,4,5,6,7,8,9,0];

function App() {

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [mathSymbol, setMathSymbol] = useState();
  const [firstValueDone, setFirstValueDone] = useState(false);

  useEffect(() => {
    firstValueDone ? setSecondValue(inputValue) : setFirstValue(inputValue);
  }, [firstValueDone, inputValue]);

  const handleValue = (val) => {
    setInputValue(prevVal => {
      return prevVal === 0 ? val : prevVal + val;
    });
  }

  const resetValue = () => {
    setInputValue(0);
    setFirstValue(0);
    setSecondValue(0);
  }

  const handleMathSymbol = (val) => {
    setFirstValue(inputValue);
    setMathSymbol(val);
    setFirstValueDone(true);
    setInputValue(0);
  }

  const calculate = () => {
    let result;
    setSecondValue(inputValue);
    if(mathSymbol === '+') result = parseInt(firstValue) + parseInt(secondValue);
    else if(mathSymbol === '-') result = parseInt(firstValue) - parseInt(secondValue);
    else if(mathSymbol === '*') result = parseInt(firstValue) * parseInt(secondValue);
    else if(mathSymbol === '/') result = parseInt(firstValue) / parseInt(secondValue);
    setInputValue(result);
  }


  return (
    <div className="App">
      <div type="text" className="input">{inputValue}</div>
      <div className="calcBtns">
        <div className="IntButtons">
          {intAvailable.map((el, idx) => {
            return <button className={`intbtn-${idx}`} key={idx} value={el} onClick={(e) => handleValue(e.target.value)}>{el}</button>
          })}
          <button onClick={resetValue}>C</button>
          <button onClick={calculate}>=</button>
        </div>
        <div className="MathBtns">
          <div className="sumBtn">
            <button value='+' onClick={(e) => handleMathSymbol(e.target.value)}>+</button>
          </div>
          <div className="substractBtn">
            <button value='-' onClick={(e) => handleMathSymbol(e.target.value)}>-</button>
          </div>
          <div className="multiBtn">
            <button value='*' onClick={(e) => handleMathSymbol(e.target.value)}>*</button>
          </div>
          <div className="divBtn">
            <button value='/' onClick={(e) => handleMathSymbol(e.target.value)}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
