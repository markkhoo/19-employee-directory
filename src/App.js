import React from "react";
import { useState, useReducer, useEffect } from 'react'
import TableRow from "./components/row";
import API from "./utils/API";

import './App.css';

function App() {
  const [getUser, setUser] = useState([]);

  useEffect(() => {
    API.getUsers().then(res => {
      setUser(res.data.results);
      console.log(res.data.results);
      console.log(getUser);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
      </header>
      <div className="Search">
        <input type="text"></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            {/* <th>Phone</th> */}
            <th>Email</th>
            {/* <th>Age</th> */}
          </tr>
        </thead>
        <tbody>
          {getUser.map(user => {
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


