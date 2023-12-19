import React from 'react'
import {useRef,useEffect}from 'react'
import {useState}from 'react'

export default function Additem () {


  const[text,setText]=useState('');
     const inpref=useRef(null);
    
   const count=useRef(0);
   useEffect(()=>{
      count.current=count.current+1;
    })
    function handlesubmit(){
        inpref.current.innerHTML=inpref.current.value;
       console.log(count.current)
     }
    
  return (
     <div>
       <input ref={inpref}type="text" value={text}onchange={(e)=>setText(e.target.value)}/>
       <button onclick={handlesubmit}>submit</button>
     </div>
  )
     
    
     
  









}





//     const[text,setText]=useState('');
//     const inpref=useRef(null);
    
//     const count=useRef(0);
//     useEffect(()=>{
//        count.current=count.current+1;
//     })
//     function submit(){
//         inpref.current.innerHTML=inpref.current.value;
//         console.log(count.current)
//     }
    
//   return (
//     <div>
//       <input ref={inpref}type="text" value={text}onchange={(e)=>setText(e.target.value)}/>
//       <button onclick={submit}>submit</button>
//     </div>
//   )
//   <h1>Render Count: {count.current}</h1>
    
     
  

