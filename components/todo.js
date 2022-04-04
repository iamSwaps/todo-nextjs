import "bootstrap/dist/css/bootstrap.css";


export default function Todo({ props }) {
  async function handleClick() {
    await fetch("../api/todos", {
      method: "DELETE",
      body: props.todo,
    });
  }
  return (
    <>
      
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <input className="form-check-input me-2" type="checkbox" value="" />
        {props.todo}
        <div className="d-flex flex-row  mb-1">
          <button
            type="submit"
            className="btn btn-danger"
            title="Delete todo"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
