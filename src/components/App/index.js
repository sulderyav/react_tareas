// import {React, useState} from 'react'

// import "./TodoCounter.css"
// import TodoCounter from "./TodoCounter" ;
// import TodoSearch from "./TodoSearch" ;
// import TodoList from "./TodoList" ;
// import TodoItem from "./TodoItem" ;
// import AddTodo from "./AddTodo"
// function App(){
// const defaultTodos = [
//   {id: 1, title: "Aprender React", completed: true},
//   {id: 2, title: "Aprender React Native", completed: false},
//   {id: 3, title: "Aprender Express", completed: true},
//   {id: 4, title: "Aprender Testing", completed: false},
// ]

// const[search, setSearch] = useState("")

// const totalTodos = defaultTodos.length;
// const completedTodos = defaultTodos.filter(function(i){
//   return !i.completed === true
// }) .length

// return(
//     <div className="container">
//       <TodoCounter totalT={totalTodos} todosP={completedTodos} />
//       <TodoList>
//         {defaultTodos.map((td) =>(
//           <TodoItem key={td.id}/>
//         )
//         )}
//         <TodoItem key={td.id}/>
//       </TodoList>
//       <TodoSearch search={search} setSearch={setSearch}/>
//       <AddTodo />

//     </div>

//   )
// }

// export default App;

import React, { useState, useEffect } from 'react';
import TodoCounter from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';
import AddTodo from '../AddTodo';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

function App() {
  // const defaultTodos = [
  //   { id: 1, title: 'Aprender React', completed: true },
  //   { id: 2, title: 'Aprender React Native', completed: false },
  //   { id: 3, title: 'Aprender Express', completed: true },
  //   { id: 4, title: 'Aprender Testing', completed: false },
  // ];

  const [search, setSearch] = useState('');
  // const [todos, setTodos] = useState(defaultTodos);
  const [todos, setTodos] = useState([]);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // function searchTodos(){
  //   const todosfilter = todos.filter(function(todo){
  //     const searchInput = search.toLowerCase();
  //     const titleTodos = todo.title.toLowerCase();
  //     return titleTodos.includes(searchInput)
  //   })
  //   return todosfilter;
  // }

  const newArray = todos.filter((todos) => {
    const searchInput = search.toLowerCase();
    const titleTodos = todos.title.toLowerCase();
    return titleTodos.includes(searchInput);
  });

  const addTask = async (task) => {
    // const newArray = [
    //   ...todos,
    //   {
    //     id: todos.length + 1,
    //     title: task,
    //     completed: false,
    //   },
    // ];
    // setTodos(newArray);

    // e.preventDefault(e);
    if (!task && task.length === '') {
      alert('Complete el campo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      // text: input,
      // completed: false,
      title: task,
      completed: false,
    });
    // setInput('');
  };

  const completeTask = (id) => {
    const newArray = [...todos];
    const valueSearch = newArray.findIndex((td) => td.id === id);
    newArray[valueSearch].completed = true;
    setTodos(newArray);
  };

  const deleteTask = (id) => {
    const newArray = [...todos];
    const valueSearch = newArray.findIndex((td) => td.id === id);
    newArray.splice(valueSearch, 1);
    setTodos(newArray);
  };

  const undoTask = (id) => {
    const newArray = [...todos];
    const valueSearch = newArray.findIndex((td) => td.id === id);
    newArray[valueSearch].completed = false;
    setTodos(newArray);
  };

  return (
    <div className="container">
      <TodoCounter totalT={totalTodos} todosP={completedTodos} />
      <AddTodo addTask={addTask} />
      <TodoList>
        {newArray.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              // id={todo.id}
              contexto={todo.title}
              notComplete={todo.completed}
              completed={todo.completed}
              title={todo.title}
              completeTask={() => completeTask(todo.id)}
              deleteTask={() => deleteTask(todo.id)}
              undoTask={() => undoTask(todo.id)}
            />
          );
        })}
      </TodoList>
      <TodoSearch search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
