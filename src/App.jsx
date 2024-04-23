import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [click, setclick] = useState('');

  // const handlechange=(a)=>{
  //   let result = click+ a
  //   setclick(()=>result)
  // }

  const handlechange = (a) => {
    let lastChar = click.slice(-1); 
    if (['+', '-', '*', '/'].includes(a) && ['+', '-', '*', '/'].includes(lastChar)) {
      let result = click.slice(0, -1) + a;
      setclick(result);
    } else {
      let result = click + a;
      setclick(result);
    }
  };
  

  const Equalsto=()=>{
    let result = String(eval(click))
    setclick(()=>result)
  }
  const Backspace=()=>{
    let curr_value=click
    if(!curr_value){
      alert ('No number');
    }
    else{
    let newvalue=curr_value.slice(0,-1);
    setclick(newvalue);
  }
  }
  return (
    <>
    <div className='calculator'>
    <div className='keypad'>
    <input type='text' value={click} /><br></br><hr></hr>
    </div>
    <div>
    <button onClick={()=>handlechange('7')}>7</button>
    <button onClick={()=>handlechange('8')}>8</button>
    <button onClick={()=>handlechange('9')}>9</button>
    <button onClick={()=>handlechange('/')}>/</button>
    <button onClick={()=>setclick(" ")}>AC</button><br></br>
    <button onClick={()=>handlechange('4')}>4</button>
    <button onClick={()=>handlechange('5')}>5</button>
    <button onClick={()=>handlechange('6')}>6</button>
    <button onClick={()=>handlechange('*')}>*</button>
    <button onClick={Backspace}>Delete</button><br></br>
    <button onClick={()=>handlechange('1')}>1</button>
    <button onClick={()=>handlechange('2')}>2</button>
    <button onClick={()=>handlechange('3')}>3</button>
    <button onClick={()=>handlechange('-')}>-</button><br></br>
    <button onClick={()=>handlechange('0')}>0</button>
    {/* <button onClick={()=>handlechange('.')}>.</button> */}
    <button onClick={()=>Equalsto('=')}>=</button>
    <button onClick={()=>handlechange('+')}>+</button><br></br>
    </div>
    </div>
   </>
  )
}

export default App
