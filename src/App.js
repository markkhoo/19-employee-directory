import React from "react";
import { useState, useReducer, useEffect } from 'react'
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

  const nameFilter = event => {
    // console.log(event.target.value.toLowerCase());
    const toFilter = getUser.filter(xx => (xx.name.first + " " + xx.name.last).toLowerCase().includes(event.target.value.toLowerCase()));
    // console.log(toFilter);
    setFilt(toFilter);
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
        />
      </div>
      <table>
        <thead>
          <tr>
            <th className="tr1">Image</th>
            <th className="tr2">Name</th>
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


