import { useState } from "react"
import './Calculator.css'

export function Calculator() {
    const [input, setInput] = useState([])

    const handleClick = (value) => {
        setInput([...input, value])
    }

    const handleClear = () => {
        setInput([]);
    }

    const handleCalculate = () => {
        const result = input
        .join("")
        .split(/(\D)/g)
        .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
        .reduce((acc, value, index, array) => {
          switch (value) {
            case "+":
              return (acc = acc + array[index + 1]);
            case "-":
              return (acc = acc - array[index + 1]);
            case "x":
              return (acc = acc * array[index + 1]);
            case "/":
              return (acc = acc / array[index + 1]);
            default:
              return acc;
          }
        });
        setInput(result)
    }

    return (
        <div className='main'>
            <h1>Calculator</h1>
            <div className='calculator'>
                <div className='display'>
                    <input id='input' type='text' placeholder='0' value={input} />
                </div>
                <div className='num'>
                    <button onClick={()=> handleClick(7)} name='7' className='num-btns'>7
                    </button><button onClick={()=> handleClick(8)} name='8' className='num-btns'>8</button>
                    <button onClick={()=> handleClick(9)}name='9' className='num-btns'>9</button>
                    <button onClick={()=> handleClick('+')} name='+' className='red-btn'>+</button>
                </div>
                <div className='num'>
                    <button onClick={()=> handleClick(4)} name='4' className='num-btns'>4</button>
                    <button onClick={()=> handleClick(5)} name='5' className='num-btns'>5</button>
                    <button onClick={()=> handleClick(6)} name='6' className='num-btns'>6</button>
                    <button onClick={()=> handleClick('-')} name='-' className='red-btn'>-</button>
                </div>
                <div className='num'>
                    <button onClick={()=> handleClick(1)} name='1' className='num-btns'>1</button>
                    <button onClick={()=> handleClick(2)} name='2' className='num-btns'>2</button>
                    <button onClick={()=> handleClick(3)} name='3' className='num-btns'>3</button>
                    <button onClick={()=> handleClick('x')} name='*' className='red-btn'>x</button>
                </div>
                <div className='num'>
                    <button onClick={handleClear} name='c' className='red-btn'>C</button>
                    <button onClick={()=> handleClick('/')} name='/' className='red-btn'>:</button> 
                    <button onClick={()=> handleClick(0)} name='0' className='num-btns'>0</button>
                    <button onClick={handleCalculate} name='calculate' className='red-btn'>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator