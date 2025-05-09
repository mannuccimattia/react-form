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
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState(todo);

  const addTodo = (e) => {
    e.preventDefault();
    const item = newItem.trim();
    setTodoList([...todoList, item]);
    setNewItem("");
  }

  const removeItem = (index) => {
    const updatedTodoList = todoList.filter((task, i) => {
      return i !== index
    })

    setTodoList(updatedTodoList);
  }

  return (
    <>
      <div className="container m-4">
        <h1>To Do List</h1>
        <ul className="list-group my-4">
          {todoList.map((task, index) => (
            <li
              key={index}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              {task}
              <button
                className='btn btn-danger ms-auto'
                onClick={() => { removeItem(index) }}
              >
                Cancella
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={addTodo}>
          <div className="input-group my-3">
            <input
              type="text"
              className='form-control'
              placeholder='Aggiungi qualcosa..'
              value={newItem}
              onChange={(e) => { setNewItem(e.target.value) }}
            />
            <button className='btn btn-primary'>
              Aggiungi
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
