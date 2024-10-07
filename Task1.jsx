import React, { useState  ,useRef } from "react";
import "./style.css";
export default function Input() {
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [index, editindex] = useState(null);
  const EDITref = useRef();

  function addText(e) {
    setName(e.target.value);
  }

  function addtodo() {
    if (index !== null) {
      const update = state.map((el, i) => {
        return i === index ? name : el;
      });
      setState(update);
      editindex(null);
    } else {
      setState([...state, name]);
    }
    setName("");
    console.log([...state, name]);
  }
  function deleteTodo(i) {
    const update = state.filter((el, index) => index !== i);
    setState(update);
  }
  function edittodo(i) {
    EDITref.current.focus()
    setName(state[i]);
    editindex(i);

  }
  return (
    <div>
      <h1>Todo App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addtodo();
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          onChange={addText}
          value={name}
          ref={EDITref}
        />
        <button type="submit">
          {" "}
          {index !== null ? "Edit" : "Add"} {}
        </button>
      </form>
      <ul>
        {state.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => edittodo(i)}>Edit</button>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


