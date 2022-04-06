import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import styles from "../styles/components/todo.module.css"
export default function Todo({ props, func }) {
  const [status, setStatus] = useState(true);
  const [button, setButton] = useState();
  const handleClick = async () => {
    setStatus(true);
    await fetch("../api/todos", {
      method: "DELETE",
      body: props.todo,
    })
      .then(setStatus(false))
      .then(func());
  };

  useEffect(() => {
    status
      ? setButton(
          <button
            type="submit"
            className="btn btn-danger"
            title="Delete todo"
            onClick={handleClick}
          >
            Delete
          </button>
        )
      : setButton(
          <button
            type="submit"
            className="btn btn-danger"
            title="Delete todo"
            onClick={handleClick}
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </button>
        );
  });

  return (
    <>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent d-flex justify-content-between">
        <div>
        <input className="form-check-input me-2" type="checkbox" value="" />
        <label className={styles.strikethrough}>{props.todo}</label>
        </div>
        <div className="d-flex flex-row  mb-1">{button}</div>
      </li>
    </>
  );
}
