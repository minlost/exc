
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Users from './Users';




export default function ExercisesList() {

  const [exercises, setExercises] = useState([])
  const [name, setName] = useState([])

  
const deleteExercise = async (id) => {
    const res = await axios.delete('http://localhost:5000/exercises/'+id)
    console.log('Item successfully deleted.')
    setExercises(
    exercises.filter(el => el._id !== id))
}


  const exerciseList = () =>{
    return exercises.map(currentexercise => {
      return  <Users excrecise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id}/> ;
    })
  }
  




  useEffect(() =>{
  
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        setExercises(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
     
  },[])


  function printIt() {
    exercises.map((value, index) => {
      console.log(value);
    })
  }


  return (
    <div>
    <h3>Logged Exercises</h3>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Date</th>
     
        </tr>
      </thead>
      <tbody>
{/* 
      { {
          exercises.map((value, index)=>{
            return (
              <tr>
              <th>{value.username}</th>
              <th>{value.description}</th>
              <th>{value.duration}</th>
              <th>{value.date}</th>
              </tr>

            // <li>{value.username}</li>
            )
          })
        } */}

       
        {exerciseList()}
       
      </tbody>

    </table>
   
      
    
   
    <button onClick={printIt}>click</button>
  </div>
  )
}

