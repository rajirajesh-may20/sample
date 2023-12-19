import React from 'react'

function Expenseitem(props) {
    const {name,amount,date}=props;
  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <br />
    </div>
  )
}
export default Expenseitem;
