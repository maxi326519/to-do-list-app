import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToDo } from "../../redux/actions";
import "./style/index.scss";

export default function AddToDo({ darkMode }) {

  const dispatch = useDispatch();
  const [ isCheked, setChecked ] = useState({ date: false, time: false }); 
  const [task, setTask] = useState({
    title: "titulo",
    description: "descripcion",
    date: null,
    time: null,
  });

  function handleCheck(e){
    switch(e.target.name){
        case 'check-time':
            isCheked.time ? setChecked({ ...isCheked, time: false }) : setChecked({ ...isCheked, time: true })
        break;
        case 'check-date':
            isCheked.date ? setChecked({ ...isCheked, date: false }) : setChecked({ ...isCheked, date: true })
        break;
        default:
            setChecked({ ...isCheked });
        break;
    }
  }

  function handleChange(e){
    setTask({ ...task, [e.target.name]: e.target.value});
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(task);
  }

  function handleSubmit(e) {
    console.log('submit');
    e.preventDefault();
    dispatch(addToDo(task));
  }

  return (
    <div className={` AddToDo Add-${ darkMode.class }`}>
      <form className="addtodo-form to-right" onSubmit={handleSubmit}>
        <h2 className="to-bottom">Add Task</h2>

        <input className="form-input-title to-right" type="text" name="title" placeholder='Title' onChange={ handleChange }/> 
        <textarea className="form-input-desc to-right" type="text" name="description" placeholder='Description...' onChange={ handleChange }></textarea>

        <div className="form-input-flex">
            <input className="form-input-date to-right" type="date" name="date" placeholder='' disabled={ !isCheked.date } onChange={ handleChange }/>
            <input type="checkbox" name="check-date" checked={ isCheked.date } onChange={handleCheck}/>
        </div>

        <div className="form-input-flex">
            <input className="form-input-time to-right" type="time" name="time" placeholder='' disabled={ !isCheked.time } onChange={ handleChange }/>
            <input type="checkbox" name="check-time" checked={ isCheked.time } onChange={handleCheck}/>
        </div>

        <div className="form-btn-container to-up-px">
          <button className={`btn btn-${ darkMode.class }`} type="submit">Add</button>
          <Link to='/' className={`btn btn-${ darkMode.class }`}>Back</Link>
        </div>
      </form>
    </div>
  );
}