import React from 'react'
import {useReducer}from 'react'
// import UseReducerhooks from './component/UseReducerhooks.jsx'
export default function UseReducerhooks() {
    const datum={
       Name:'',
       Age:0
    }
    function chgData(state,action){
        switch(action.type){
            case 'change_name':
                return{
                    Name:action.nxtName,
                    Age:state.Age
                }
            case'inc-age':
                return{
                        Name:state.Name,
                        Age:state.Age+1
                    }
            case 'dec-age':
                return{
                            Name:state.Name,
                            Age:state.Age-1
                        }
        }

    }
    const[state,dispatch]=useReducer(chgData,datum);
  return (
    <div>
    <input type="text"onChange={(e)=>{
        dispatch(
            {
                type:'change_name',
                nxtName:e.target.value
            }
        )
    }}/>
    <button onClick={()=>{
        dispatch({
            type:'inc-age'
        })
    }}>increment</button>
    <button onClick={()=>{
        dispatch({
            type:'dec-age'
        })
    }}>decrement</button>
   
    <h1>Name:{state.Name}</h1>
    <h1>Age:{state.Age}</h1>
      
    </div>
  )
}
