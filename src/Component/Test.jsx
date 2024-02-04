import React, { useEffect, useState } from 'react'


// https://jsonplaceholder.typicode.com/users



const Test = () => {

    const [demoData, SetDemoData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");

        const json = await data.json();

        SetDemoData(json);
        console.log(json);
    }


  return demoData.length == 0 ? <p>Loading...</p>: (
      <div>
          {
              demoData.map((res) => {
                  return <div style={{border:"1px solid black",padding:"10px"}} key={res.id}>
                      <p>{res.name }</p>
                      <p>{res.address.city }</p>
                      <p>{res.email }</p>
                      <p>{res.phone }</p>
                      <p>{res.usernmae }</p>
                      <p>{res.website }</p>
                  </div>
              })
          }
         
    </div>
  )
}

export default Test;
