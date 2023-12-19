import React,{usestate} from 'react'


export default function Usestate(){
    const[state,setstate]=usestate(0);
    return(
        <div>
        <button onClick={()=>setstate(1)}>state1</button>
    
        
        <button onClick={()=>setstate(2)}>state2</button>
        
        <Disp sstate={state}/>
        </div>
    )

}
function Disp(s){
    if(s.sstate===1){
        return(
        
        <h1>state1</h1>
        
        )
    }

    if(s.sstate===1){
    return(
       
       <h1>state2</h1>
       
  )
    }



}
