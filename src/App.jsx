
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  const [amount,setAmount]=useState(0);
  const [discount,setDiscount]=useState(0);

  const [final,setFinal]=useState(0);
  const [save,setSave]=useState(0)

  console.log(amount);

  const calculate=(e)=>{
    const output=amount*discount/100;
    const result=amount-output;
    console.log(output);
    console.log(result);
    setSave(output)
    setFinal(result)
  }

  const reset=(e)=>{
    setAmount(0);
    setDiscount(0);
    setFinal(0);
    setSave(0);
  }



  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Discount Calculator</h1>
        </div>

        <div className="total">
          <h3 style={{color:'brown'}}>Final Amount: &#8377; {final}</h3>
          <br />
          <h3 style={{color:'green'}}>You have Saved  &#8377; {save}</h3>
        </div>

        <div className="form">
          <form>
            <div className="input">
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="filled" />
            <br />
            <TextField id="filled-basic" value={discount||""} onChange={(e)=>setDiscount(e.target.value)} label="Discount %" variant="filled" />
            </div>

            <div className="button">
            <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
            <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
