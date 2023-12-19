import React from 'react'

export default function UsememoHook() {

    const [vals,setVals] = React.useState(0);

    function ClickMe(){
        setVals( e => e+1 );
    }

    const MultiValue = React.useMemo(()=>{
        
        return vals*5;

    },[vals]);

    const square = React.useMemo(()=>{
        
        return vals*vals;

    },[vals]);
  return (
    <div>
        <button onClick={ClickMe}>Clicke ME</button>

        <h1>Incremented Value:{vals}</h1>
        <h1>5 Multipled Value:{MultiValue}</h1>
        <h1>Square Value:{square}</h1>
    </div>
  )
}
