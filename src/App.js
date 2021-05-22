import axios from "axios";
import React from "react";
import { useState, useReducer, useEffect } from 'react'
import TableRow from "./components/row";
import API from "./utils/API";

import './App.css';

function App() {


  useEffect(() => {
    API.getUsers().then(res => {
      console.log(res.data.results);
    }).catch(err => console.log(err));
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
      </header>
      <div className="Search">
        <input type="text"></input>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
