
import React from "react";
//import styled from "styled-components"; 
//import Tracker from "./components/Tracker"; 
//import GlobalStyles from "./GlobalStyles"; 
import 'bootstrap/dist/bootstrap.min.css';
import 'bootstrap/dist/bootstrap.bundle.js';
// import { BrowserRouter,Routes,Route} from "react-router-dom";
// import Snoozed from './component/Snoozed';
// import Starred from './component/Starred';
// import Inbox from './component/Inbox';



// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          <h1>WELCOME TO GMAIL</h1>
//       //   </header>
//       //  <li> <a href="/Inbox">Inbox</a></li>
//       //  <li> <a href="/Starred">Starred</a></li>
//       //  <li> <a href="/Snoozed">Snoozed</a></li>
      
       
//       //  <BrowserRouter>
//       //  <Routes>
       
//       //  <Route path='/Starred' element={<Starred />}/>
//       //  <Route path='/Snoozed' element={<Snoozed />}/>
//       //  <Route path='/Inbox' element={<Inbox />}/>
//       //  </Routes>
//       //  </BrowserRouter>
        
      
//     </div>
//   );
// }





 function App() {
  const[expenses,setExpenses]=useState([]);

  const addExpenses=(expense)=>{
    setExpenses((prevExpenses)=>{
      return[...prevExpenses,expense];
    });
  };
  const handlesubmit= (e)=>{
      e.preventDefault();
     const name =e.target.name.value;
     const amount=e.target.amount.value;
     const date=e.target.date.value;
     addExpenses({name,amount,date});
    e.target.reset();
  };
   return(
     <div>
     <form onsubmit={handlesubmit}>
    <input type="text" name="name"placeholder="Expense Name" />
    <input type="number" name="amount" placeholder="Amount" />
    <input type="date" name="date" placeholder="Date" />
     <button type="submit">Add Expense</button>
     </form>
    {expenses.map((expense,index)=>(
      <Expenseitem
      key={index}
      name={expense.name}
       amount={expense.amount}
       date={expense.date}
       />
    ))}
     </div>
   );


}
export default App;


  
// export default App;