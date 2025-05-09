import React from 'react'
import { useState } from 'react'

const todo = [
  "Leggere la documentazione",
  "Fare l'esercizio del giorno",
  "Fare una pausa",
  "Pulire casa",
  "Fare la spesa",
  "Cenare",
  "Loggare in orario per il raid"
];

const App = () => {
  return (
    <>
      <div className="container m-4">
        <h1>To Do List</h1>
        <ul className="list-group my-4">
          {todo.map((task, index) => (
            <li
              key={index}
              className='list-group-item'
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
