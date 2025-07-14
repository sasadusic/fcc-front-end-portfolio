import React from 'react'
import { useState, useEffect } from 'react'

const Calc = () => {
   const [nums, setNums] = useState('0')
    const [result, setResult] = useState('0')
    const [justEvaluated, setJustEvaluated] = useState(false)

    const addNums = (n) => {
        console.log(n)
        const operators = ['+', '-', '*', '/'];
        const lastChar = nums[nums.length - 1];
        const secondLastChar = nums[nums.length - 2];
    
        // Ako smo upravo pritisnuli "="
        if (justEvaluated) {
            if (/[0-9]/.test(n)) {
                setNums(n);
            } else if (operators.includes(n)) {
                setNums(result + n);
            }
            setJustEvaluated(false);
            return;
        }
    
        // Ako korisnik unosi operator
        if (operators.includes(n)) {
            // Ako je prethodni karakter takođe operator
            if (operators.includes(lastChar)) {
                // Ako je sekvenca operator + minus (dozvoljeno: npr. *-)
                if (n === '-' && !operators.includes(secondLastChar)) {
                    setNums(nums + n);
                } else {
                    // Zameni sve zadnje operatore sa novim
                    let newNums = nums.replace(/[\+\-\*\/]+$/, '');
                    setNums(newNums + n);
                }
                return;
            }
        }
    
        // Blokiraj višestruke decimalne tačke
        if (n === '.') {
            const parts = nums.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1];
            if (lastPart.includes('.')) return;
            if (lastPart === '') {
                setNums(nums + '0.');
                return;
            }
        }
    
        // Ako je trenutno "0", zameni ako unosimo broj
        if (nums === '0' && !operators.includes(n) && n !== '.') {
            setNums(n);
        } else {
            setNums(nums + n);
        }
    };
    


    const clear = () => {
        setNums('0')
        setResult('0')
    }

    const calc = () => {
        try {
            const evalResult = eval(nums).toString()
            setResult(evalResult)
            setNums(evalResult)
            setJustEvaluated(true)
        } catch (error) {
            setResult("Greska u izrazu")
        }
    }

  return(
    <div id="home" className="home">

    <div id='calc' className="cont">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
  <div className="calculator">
    <div className="res-cont">
    <div className="res" id="display">{result === '0' ? nums : result}</div>
    </div>
  <div className="num">
    <button className="key clear" id="clear" onClick={clear}>AC</button>
    <button className="key op" id="divide"  onClick={() => addNums('/')}>/</button>
    <button className="key op" id="multiply" onClick={() => addNums('*')} >X</button>
    <button className="key" id="seven" onClick={() => addNums('7')}>7</button>
    <button className="key" id="eight" onClick={() => addNums('8')}>8</button>
    <button className="key" id="nine" onClick={() => addNums('9')}>9</button>
    <button className="key op" id="subtract" onClick={() => addNums('-')}>-</button>
    <button className="key" id="four" onClick={() => addNums('4')}>4</button>
    <button className="key" id="five" onClick={() => addNums('5')}>5</button>
    <button className="key" id="six" onClick={() => addNums('6')}>6</button>
    <button className="key op" id="add" onClick={() => addNums('+')} >+</button>
    <button className="key" id="one" onClick={() => addNums('1')}>1</button>
    <button className="key" id="two" onClick={() => addNums('2')}>2</button>
    <button className="key" id="three" onClick={() => addNums('3')}>3</button>
    <button className="key equals" id="equals" onClick={calc}>=</button>
    <button className="key zero" id="zero" onClick={() => addNums('0')}>0</button>
    <button className="key" id="decimal" onClick={() => addNums('.')}>.</button>
    
  </div>
    </div>
  </div>
    </div>
  )
}

export default Calc