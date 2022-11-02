import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TaskCard from '../TaskCard';
import plus from '../../assets/svg/plus.svg'
import "./style/index.scss";

export default function ToDoList({ darkMode }) {
  const toDoList = useSelector((state) => state.toDo);

  return (
    <div className={`ToDo ToDo-${ darkMode.class }`}>
      <div className="todo-panel">
        <div className="todo-header to-right">
          <h1>Task List</h1>
          <Link className='btn-add' to="/add"><img src={ plus } alt='svg'/></Link>
        </div>
        <div className="todo-task">
          {toDoList?.map((task) => {
            return <TaskCard
                key={ task.id }
                title={ task.title }
                description={ task.description }
                date={ task.date }
                time={ task.time }
                complete={ task.complete }
                darkMode={ darkMode }
            />
          })}
        </div>
      </div>
    </div>
  );
}