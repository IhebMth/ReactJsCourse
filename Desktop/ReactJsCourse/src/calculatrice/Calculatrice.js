
import './Calculatrice.css'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Calculatrice() {
    useEffect(() => {
         
            if(number.length % 14 === 13)
            {
                setNumber(number + "\n")

                let element = document.querySelector('.result');
                element.style.fontSize = fontSize
            }
       
    })

    let [number, setNumber] = useState("0")
    let [result, setResult] = useState(0)
    let [fontSize, setFontSize] = useState("18px")
    
    const clickNumber = (e) => {
     
        if (number === "0") {

        setNumber(e.target.textContent)
    }else
    {
        setNumber(number + e.target.textContent)   
    }
}
    let addition = () => {
        if(
        ( number.slice(-1) === "-") || 
        ( number.slice(-1) === "+")  ||
        ( number.slice(-1) === "*") ||
        ( number.slice(-1) === "/") ||
        (( number.slice(-1) === "."))
        )
        {
            setNumber(number)
        }else 
        {
            setNumber(number + "+")
        }
    }

    let substraction = () => {
        if (( number.slice(-1) === "-") || 
        ( number.slice(-1) === "+")  ||
        ( number.slice(-1) === "*") ||
        ( number.slice(-1) === "/") ||
        (( number.slice(-1) === "."))
        )
        {
            setNumber(number)
        }else 
        {
            setNumber(number + "-")
        }
    }

    let  multiplication = () => {
        if (( number.slice(-1) === "-") || 
        ( number.slice(-1) === "+")  ||
        ( number.slice(-1) === "*") ||
        ( number.slice(-1) === "/") ||
        (( number.slice(-1) === "."))
        )
        {
            setNumber(number)
        }else 
        {
            setNumber(number + "*")
        }
    }

    let  division = () => {
        if (( number.slice(-1) === "-") || 
        ( number.slice(-1) === "+")  ||
        ( number.slice(-1) === "*") ||
        ( number.slice(-1) === "/") ||
        (( number.slice(-1) === "."))
        )
        {
            setNumber(number)
        }else 
        {
            setNumber(number + "/")
        }
    }

    let  dot = () => {
        if (( number.slice(-1) === "-") || 
        ( number.slice(-1) === "+")  ||
        ( number.slice(-1) === "*") ||
        ( number.slice(-1) === "/") ||
        (( number.slice(-1) === "."))
        )
        {
            setNumber(number)
        }else 
        {
            setNumber(number + ".")
        }
    }

   
        let  clear = () => {
            setNumber("0");
          };
    

    let res = () => {
        try {
          setResult(eval(number));
        } catch (e) {
          setResult("Error");
        }
      };

      useEffect(() => {
        setNumber(result.toString())
    }, [result])

    return <div className='calculatrice'>
        <div className='result'>{number}</div>
        
        <div className='grid-container'>
    <button className="grid-item" onClick={clickNumber}>7</button>
  <button className="grid-item" onClick={clickNumber}>8</button>
  <button className="grid-item"  onClick={clickNumber}>9</button>

  <button className="grid-item" onClick={clear}>C</button>
  
  <button className="grid-item"  onClick={clickNumber}>4</button>
  <button className="grid-item"  onClick={clickNumber}>5</button>
  <button className="grid-item"  onClick={clickNumber}>6</button>
  <button className="grid-item" onClick={addition}>+</button>

  <button className="grid-item"  onClick={clickNumber}>1</button>
  <button className="grid-item"  onClick={clickNumber}>2</button>
  <button className="grid-item"  onClick={clickNumber}>3</button>
  
  <button className="grid-item"  onClick={substraction}>-</button>
  <button className="grid-item"  onClick={clickNumber}>0</button>
  <button className="grid-item" onClick={dot}>.</button>
  <button className="grid-item" onClick={division}>/</button>

  <button className="grid-item" onClick={multiplication}>*</button>

  <button className="grid-item grid-button-full-width" onClick={res}>=</button>  
</div>
</div>
}