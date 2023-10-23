import React, { useEffect, useState } from 'react'
import ReadContract from './components/ReadContract'
import WriteContract from './components/WriteContract'
import Web3 from 'web3';
import ABI from './ABI/ABI.json'
import './index.css'
const App = () => {
  const [state,setState]=useState({web:null,contract:null});
  useEffect(()=>{
    const template=async()=>{
      const address="0xD1Fc24B55A8B457c9D87eB019aA35688ae823989";
      const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      // const accounts=await web3.eth.getAccounts();
      const contractIntance= new web3.eth.Contract(ABI,address)
      setState({web:web3,contract:contractIntance})
    }
    template();
  },[])

  return (
    <div className='main'>
      <ReadContract state={state}/>
      <WriteContract state={state}/>
    </div>
  )
}

export default App
