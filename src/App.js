import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiSwitchHorizontal } from 'react-icons/hi';
import React, {useEffect, useState} from 'react'
// import axios from 'axios'

function App() {
  // const [symbols, setSymbols] = useState('');
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('CUP');
  const [to, setTo] = useState('CUP');
  const [result, setResult] = useState('');


//Free API limit reached.

//   const fetchData = async() => {
//     await axios.get('https://free.currconv.com/others/usage?apiKey=9ba5f064dc3d4e500552')
//     .then(function (response) {
//       console.log(response)
//       // setSymbols(response)
//     }).catch(function (error) {
//       console.log(error);
//     })
// }

  // useEffect (() => {
  //   fetchData();
  // },[])
  
  const handleClickConvert = () => {
    if(from === "USD"){
      if(to === "VND"){
        setResult(amount*23161.50);
      }
      else if(to === "RUB"){
        setResult(amount*63.16);
      }
      else if(to === "USD"){
        setResult(amount)
      }
    }else if(from === "VND"){
      if(to === "RUB"){
        setResult(amount*0.0027)
      }else if(to === "USD"){
        setResult(amount*0.000043)
      }else if(to === "VND"){
        setResult(amount);
      }
    }else{
      if(to === "RUB"){
        setResult(amount)
      }else if(to === "USD"){
        setResult(amount*0.016)
      }else if(to === "VND"){
        setResult(amount*369.84);
      }
    }
  }

  const handleClickSwitch = () => {
    var oldfrom = from;
    setFrom(to);
    setTo(oldfrom);
  } 

  const symbol = ['USD', 'VND', 'RUB']
  return (
    <div className="App bg-gradient-to-r from-slate-400  to-blue-400 w-screen h-screen
     flex flex-col items-center justify-center">
        <b className="text-4xl m-5 text-slate-700">Exchange Rates</b>
        <div className=" flex flex-col items-center w-1/2 h-2/3 bg-white rounded-xl shadow-2xl">
            <div className="mb-4 flex flex-col mt-2">
              <label className="text-lg font-bold text-blue-800">Amount</label>
              <input type="number" className="border rounded-lg p-1 border-blue-800" onChange={(e) => setAmount(e.target.value)}></input>
            </div>
            <div className="mb-4 flex justify-around w-full">
              <div className="mb-4 flex flex-col mt-2">
                <label className="text-lg font-bold text-blue-800">From</label>
                <Dropdown options={symbol} value={from} placeholder={'Select an option'} onChange={(e) => setFrom(e.value)}/>
              </div>
              <HiSwitchHorizontal className="mt-10 bg-blue-600 rounded-lg w-7 h-7 cursor-pointer" onClick={() => handleClickSwitch()}/>
              <div className="mb-4 flex flex-col mt-2">
                <label className="text-lg font-bold text-blue-800">To</label>
                <Dropdown options={symbol} value={to} placeholder={'Select an option'} onChange={(e) => setTo(e.value)}/>
              </div>
            </div>
            <button className="mt-12 border rounded-xl  bg-blue-400 p-3" onClick={() => handleClickConvert()}>Convert</button>
            <div className="mt-4 flex flex-col">
              <label>Result: </label>
              <strong>{amount} {from} = {result} {to}</strong>
            </div>
        </div>
    </div>
  );
}

export default App;
