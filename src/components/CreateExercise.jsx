
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios'

function CreateExercise({}) {


    const [userName, setUserName] = useState({
        username: 'asdasda',
        description: '',
        duration: 0,
        date: '',
        users: [],
        u: ""
        
  
    })


    useEffect(() => {
      
      axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUserName({
            users: response.data.map(user => user.username),
            username: response.data[0].username,
            date: new Date()
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
    },[])




    const handleChaneg = (e) => {
      const {name, value} = e.target
      setUserName((prev) => {
        return {...prev, [name]: value}
      })
    }

    // const setDate = (e) => {
    //   const {name, value} = e.target
    //   setUserName((prev) => {
    //     return {...prev, [name]: value}
    //   })
    // }

    const printIt = () => {
      const exercise = {
        username: userName.username,
        description: userName.description,
        duration: userName.duration,
        date: userName.date
      }
    
      axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));
    }


  return (
   <>
      <div>
           <select
              
              name="username"
              className="form-control"
              onChange={handleChaneg}
              >
              
              {                
                userName.users.map((user) => (
                  <option key={user} value={user}>{user}</option>

                ))
              }
            </select>

           <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
            
                className="form-control"
                name="description"
                onChange={handleChaneg}
                />
          </div>

          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                name="duration"
                onChange={handleChaneg}
                />
           </div>  

          <div className="form-group">
            <label>Date</label>
            <input 
                type="date"
                className="form-control"
                name="date"
                onChange={handleChaneg}
                />
           </div>  

          {/* <div className="form-group">
            <label>Date: </label>
            <div>
            <DatePicker
              
              selected={userName.date} 
              onChange={selectDate} />

            </div>
          </div> */}
           <button onClick={printIt}>Click</button>   
      </div>
      </>
  )
}

export default CreateExercise