import './App.css';
import { evaluate } from "mathjs";
import { useState } from "react";
import logo from './logo.svg';

function App() {
  const redBtns = ["(",")","%","C"]
  const btnValue = ["7","8","9","/","4","5","6","*","1","2","3","+","0",".","=","-"]
  const [value, setValue] = useState("")
  
  const handleClick = (str) => { 
  setValue(str === "=" ? evaluate(value)
          : str === "C" ? ""
          : value + str)
        }
  return (
<div className='App'>
  <h1>react-calculator</h1>
  <div className='Calculator'>
    <div className='calculator-screen'>
      <h1>{value}</h1>
    </div>
    <div className="Buttons">
    <div className='redBtns'>
    {redBtns.map((button, index) => {
    return (
    <button onClick={() => handleClick(button)} key={index}>{button}</button>
    )
})}
  </div>
    {btnValue.map((button, index) => {
    return (
    <button onClick={() => handleClick(button)} key={index}>{button}</button>
    )
})}
    </div>
  </div>
  <img className="logo" alt="React logo" src={logo}/>
</div>
  );
}
export default App;