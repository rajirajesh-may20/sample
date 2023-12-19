import React,{useEffect, useState} from 'react'
i
export default function Useeffect() {
    const[views,setviews]=useState([])
    const [filterviews,setfilterviews]=useState([])
    useEffect(()=>{
        fetch('https://654c8c5f77200d6ba858fc38.mockapi.io/SmapleCollection')
        .then(res=>res.json())
        .then(result=>setviews(result))
        .catch(err=>console.log(err))
    },[])
    console.log(views);
    useEffect(()=>){
        views.filter((x)=>{
            if(x.id>=3 x.id<=6){
             return x
            }
            else{
                return false
            }
            );
        }
    
    },[])
    console.table(filterviews)
  return (
    <div>
      
    </div>
  )

