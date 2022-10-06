
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import axios from 'axios'

function CreateUser() {

  const [username, setUsername] = useState('')

function prinIt() {
  console.log(username);
}

function hangleChange(e) {
  setUsername(e.target.value)
}

function onSubmit(e) {
  e.preventDefault()
  const user = {
    username: username
  }
  console.log(user);

  axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));
  // window.location="/"

  setUsername("")
  console.log(username)

}

  return (
    <div>
    <h3>Create New User</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group"> 
        <label>Username: </label>
        <input  type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>
  )
}

export default CreateUser