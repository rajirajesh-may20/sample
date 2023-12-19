import React,{Usecallback,useState} from 'react'

  export default function Usecallbackhook() {
     
    const[inp,setInp]=useState('');
    const[arr,setArr]=useState([]);
     
    const HandleSubmit=Usecallback(()=>{
        if(inp){
            setArr([...arr,inp])
        }
        console.log(arr);
    },[inp,arr]);
    

  return (
    <div>
    <input type='text' onChange={(e)=>{
        setInp(e.target.value)
    }} />
    <button onclick={HandleSubmit}>update</button>
    
    <ol>
    {
        arr.map((items, index)=>{
            return(
                <li key={index}>{items}</li>
            )

        })

    }


    </ol>



    </div>
  )
}
