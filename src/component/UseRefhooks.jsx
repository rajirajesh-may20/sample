import React,{useRef} from 'react'

export default function UseRefhooks() {
    const backRef=useRef(null)
    const inpRef=useRef('')
    function chgBack(){
        const r= Math.floor(Math.random()*255);
        const g=Math.floor(Math.random()*255);
        const b=Math.floor(Math.random()*255);
        const rgb=`rgb(${r},${g},${b})`;
        const r1= Math.floor(Math.random()*255);
        const g1=Math.floor(Math.random()*255);
        const b1=Math.floor(Math.random()*255);
        const rgb1=`rgb(${r1},${g1},${b1})`;
        backRef.current.innerHTML=inpRef.current.value;
        console.log(backRef.current);
        backRef.current.style.backgroundColor=rgb;
        backRef.current.style.color=rgb1;
    



    }
  return (
    <div>
      <h1 ref={backRef}>Hello World</h1>
      <br />
      <input ref={inpRef} type="text"/>
      <button onClick={chgBack}>update</button>
    </div>
  )
}
