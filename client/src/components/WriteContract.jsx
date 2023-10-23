import React, { useEffect, useState } from 'react'

const WriteContract = ({state}) => {
    const [data,setData] = useState(null);

   const handlechange=async(e)=>{
     e.preventDefault();
     const address="0xF04D14fC1B60f8AB71c77044154641428c2dC3EB";
     const {contract}=state;
     if(data!=null){
         await contract.methods.store(data).send({"from":address})
         location.reload();
         alert("Data has been changed!");
     }else{
        alert("Please add some data.")
     }

   }
  return (
    <div>
      <input type="number" onChange={(e)=>setData(e.target.value)} style={{padding:"10px",marginRight:"10px"}}/>
      <button style={{padding:"10px",cursor:"pointer"}} onClick={handlechange}>change</button>
    </div>
  )
}

export default WriteContract
