import React, { createContext, useContext, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Usecon from './component/Usecon.css'

export const a = createContext('');

function UseConhook() {

    const [theme,setTheme] = useState('light');

    function chgTheme(){
        
        setTheme(crr => crr === 'light'? 'dark' : 'light')
    
    }
  return (
    <div id={theme}>
        <Form.Check 
        type="switch"
        id="custom-switch"
        label={theme}
        onChange={chgTheme}
      />

      <a.Provider value={theme}>
        <Disp />
      </a.Provider>
    </div>
  )
}

export default UseConhook;



function Disp(){

    const b = useContext(a);

    return(
        <div id={b} style={{height:80,width:1000}}>
            <h1>
                This is use Context Demo
            </h1>
        </div>
    )
}
