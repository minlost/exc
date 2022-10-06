import React from 'react'

const Users = ({excrecise, deleteExercise}) =>{
    return (
      <tr>
         <th>{excrecise.username}</th>
          <th>{excrecise.description}</th>
          <th>{excrecise.duration}</th>
          <th>{excrecise.date}</th>
          <th>{excrecise._id}</th>
          <td>
          <button onClick={() => {deleteExercise(excrecise._id) }}>delete</button>
          </td>
      </tr>
  )
  }
export default Users