import React from "react";
import { useState, useEffect } from 'react'
import TableRow from "./components/row";
import API from "./utils/API";

import './App.css';

function App() {
  const [getUser, setUser] = useState([]);
  const [getFilt, setFilt] = useState([]);

  useEffect(() => {
    API.getUsers().then(res => {
      setUser(res.data.results);
      setFilt(res.data.results);
      // console.log(res.data.results);
      // console.log(getUser);
    }).catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log("hello world")
  // }, [getFilt]);

  const nameFilter = event => {
    // console.log(event.target.value.toLowerCase());
    const toFilter = getUser.filter(xx => (xx.name.first + " " + xx.name.last).toLowerCase().includes(event.target.value.toLowerCase()));
    // console.log(toFilter);
    setFilt(toFilter);
  };

  const nameSort = () => {
    const toSort = getUser.sort((a,b) => {
      if ( a.name.last < b.name.last ) { return -1; }
      if ( a.name.last > b.name.last ) { return 1; }
      return 0;
    });
    // console.log(toSort);
    setFilt(toSort);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
      </header>
      <div className="Search">
        <input 
          type="text"
          onChange={nameFilter}
          placeholder="Name"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th className="tr1">Image</th>
            <th className="tr2" onClick={nameSort}>Name</th>
            {/* <th>Phone</th> */}
            <th className="tr3">Email</th>
            {/* <th>Age</th> */}
          </tr>
        </thead>
        <tbody>
          {getFilt.map(user => {
            return (
              <TableRow
                key={user.cell}
                thumbnail={user.picture.thumbnail}
                name={`${user.name.first} ${user.name.last}`}
                // phone={user.cell}
                email={user.email}
                // age={user.age}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;


