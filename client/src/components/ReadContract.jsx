import React, { useEffect, useState } from 'react'

const ReadContract = ({state}) => {
    const {contract}=state;
    const [data ,setData]=useState(null);
    useEffect(()=>{
        const readData=async()=>{
         const data=await contract.methods.retrieve().call();
         setData(data);
        }
        readData()
    },[data,state]);
  return (
    <div>
     Read value: {data}
    </div>
  )
}

export default ReadContract
