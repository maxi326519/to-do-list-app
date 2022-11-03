import { removeToDo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./style/index.scss";

import arrowDown from "../../assets/svg/arrowDown.svg";
import edit from "../../assets/svg/edit.svg";
import close from "../../assets/svg/close.svg";
import calendar from "../../assets/svg/calendar.svg";
import clock from "../../assets/svg/clock.svg";

export default function TaskCard({
  id,
  title,
  description,
  date,
  time,
  complete,
  darkMode,
}) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    data: "disable",
    animation: "to-bottom",
  });

  function handleRemove() {
    setState({ ...state, animation: "hidden" });
    setTimeout(() => {
      dispatch(removeToDo(id));
    }, 300);
  }

  function descriptionOn() {
    if (state.data === "disable") {
      setState({ ...state, data: "active" });
    } else {
      setState({ ...state, data: "disable" });
    }
  }

  return (
    <div
      className={`task-card card-${darkMode.class} ${state.data} ${state.animation} `}
    >
      <h2 className="to-left">{title}</h2>
      <div className="task-options to-right">
        <button className={`btn btn-${darkMode.class} to-bottom`}>
          <img src={edit} alt="svg" />
        </button>
        <button className={`btn btn-${darkMode.class}`} onClick={descriptionOn}>
          <img src={arrowDown} alt="svg" />
        </button>
        <button className={`btn btn-${darkMode.class}`} onClick={handleRemove}>
          <img src={close} alt="svg" />
        </button>
      </div>
      <div className="task-details">
        <p className="to-right">{description}</p>
        <div className="task-limite to-up-px">
          <img src={calendar} alt="svg" />
          <span>{date}</span>
          <img src={clock} alt="svg" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
