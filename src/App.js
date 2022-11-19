import './App.css';
import { useState } from 'react';





function App() {

  
  const [display,setDisplay] = useState('0')


  const handleNumber = (event) => {
    const number = event.target.textContent; 

    if (display==='0') {
     setDisplay(number);
     }else{setDisplay(display+number)}

  }

  const handleClear = () => {
    setDisplay("0");
  }


  const handleOperator =(event) => {
    const operator = event.target.textContent; 
    const array = display.split(' ')
    const last = array[array.length - 1]
    const ifInt = parseInt(last)

    if (Number.isInteger(ifInt)) {      /* only If you press operator after number, adds operator */
    setDisplay(display + " " + operator + " ");
      
    } else if(operator==='-') {               /*if you press '-' after operator */      
      setDisplay(display +operator );      
    }else{                                      /* If you press operator after operator, no change */
      setDisplay(display)
    }
  }

  const handleDecimal = () => {
    const array = display.split(' ')
    const last = array[array.length - 1]

    if (!last.includes('.')) {
      setDisplay(display + '.');
    }
  }

  const  handleEqual = () => {

    function evalSimilar(str) {
      return Function(`'use strict'; return (${str})`)()
    }   
    const result= evalSimilar(display);    /*calling evalSimmilar so it can procces the display string in the {display } and return the result  */
         
    if (result.toString().length < 5) {  /* toFixed so we can cut the decimals to 0.123456  */  

     const trimmed1 = result.toFixed(2) 
     setDisplay(trimmed1)
    
    }else{

      const trimmed2 = result.toFixed(7) 
      setDisplay(trimmed2)
    }
  }

  return (
    <div className="App">
      <div>
        <div className="calculator">

                <div id="display" className="row">{display}</div>
                <div id="clear" className="row" onClick={handleClear}>AC</div>
                  <div className='numpad' id="seven" onClick={handleNumber}>7</div>
                  <div className='numpad' id="eight" onClick={handleNumber}>8</div>
                  <div className='numpad' id="nine" onClick={handleNumber}>9</div>
                  <div className='numpad' id="multiply" onClick={handleOperator}>*</div>
                  <div className='numpad' id="four" onClick={handleNumber}>4</div>
                  <div className='numpad' id="five" onClick={handleNumber}>5</div>
                  <div className='numpad' id="six" onClick={handleNumber}>6</div>
                  <div className='numpad' id="divide" onClick={handleOperator}>/</div>
                  <div className='numpad' id="one" onClick={handleNumber}>1</div>
                  <div className='numpad' id="two" onClick={handleNumber}>2</div>
                  <div className='numpad' id="three" onClick={handleNumber}>3</div>
                  <div className='numpad' id="add" onClick={handleOperator}>+</div>
                  <div className='numpad' id="zero" onClick={handleNumber}>0</div>
                  <div className='numpad' id="decimal" onClick={handleDecimal}>.</div>
                  <div className='numpad' id="subtract" onClick={handleOperator}>-</div>
                  <div className='numpad' id="equals" onClick={handleEqual}>=</div>
                </div>

              </div>
            </div>
  );
}

export default App;
