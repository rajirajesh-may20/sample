import React, { useEffect, useState } from 'react'

export default function UseEffectHooks() {

    const [views,setViews] = useState([]);

    const [filterviews,setFilterviews] = useState([]);

    useEffect(()=>{
        fetch('https://654c8c5f77200d6ba858fc38.mockapi.io/SmapleCollection')
        .then(res => res.json())
        .then(results => setViews(results))
        .catch(err => console.log(err)) 
    },[])
    console.log(views);

    useEffect(()=>{
        setFilterviews(
            views.filter((x)=>{ //filter method
                if(x.id >=3 && x.id<=6){
                    return x
                }
                else{
                    return false
                }
            })
        );
    },[])

    console.table(filterviews)

    

  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
            {
                filterviews.map((items)=>{
                    return(
                        <tr>
                            <td>{items.id}</td>
                            <td>{items.Name}</td>
                            <td>{items.Email}</td>
                            <td>{items.Phone}</td>
                            <td>{items.Username}</td>
                            <td>{items.Password}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}
