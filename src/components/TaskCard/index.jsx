import { removeToDo } from "../../redux/actions";
import { useDispatch } from 'react-redux';

import "./style/index.scss";

import arrowDown from "../../assets/svg/arrowDown.svg";
import edit from "../../assets/svg/edit.svg";
import close from "../../assets/svg/close.svg";

export default function TaskCard({
  key,
  title,
  description,
  date,
  time,
  complete,
  darkMode,
}) {

  const dispatch = useDispatch();
  
  function handleRemove(){
    dispatch(removeToDo(key));
  }

  return (
    <div>
      <div className={`task-card card-${darkMode.class} to-bottom`}>
        <div className="task-data">
          <h2 className="to-left">{title}</h2>
        </div>
        <div className="task-options to-right">
          <button className={`btn btn-${darkMode.class}`}>
            <img src={arrowDown} alt="svg" />
          </button>
          <button className={`btn btn-${darkMode.class}`}>
            <img src={edit} alt="svg" />
          </button>
          <button className={`btn btn-${darkMode.class}`} onClick={handleRemove}>
            <img src={close} alt="svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
