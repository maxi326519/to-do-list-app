import { Route } from 'react-router-dom';
import { useState } from 'react';

import ToDoList from './components/ToDoList'
import AddToDo from './components/AddToDo'
import './App.scss';

export default function App() {

  const [ darkMode, setDarkMode ] = useState({ isActive: true, class: 'dark'});

  return (
    <div className={`App App-${ darkMode.class } `}>
      <Route exact path='/' render={ ()=><ToDoList darkMode={ darkMode }/> }/>
      <Route path='/add' render={ ()=><AddToDo darkMode={ darkMode }/> }/>
    </div>
  );
}