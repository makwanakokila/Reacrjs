import React, { useEffect, useState } from "react";

const Localstorage = () => {
  const [state, setState] = useState({
    id: null,
    name: "",
    email: "",
  });

  const [data, setData] = useState(() => {
    const savedata = JSON.parse(localStorage.getItem("data"));
    return savedata || [];
  });

  const [editIndex, setEditIndex] = useState(null); // Add this to manage edit state

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = data.map((item, index) =>
        index === editIndex ? state : item
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, state]);
    }
    setState({ name: "", email: "" });
  }

  function deleteForm(i) {
    const updated = data.filter((_, index) => index !== i);
    setData(updated);
  }

  function editForm(i) {
    setState(data[i]);
    setEditIndex(i);
  }

  return (
    <div>
      <h1>Localstorage</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          id="name"
          value={state.name}
          placeholder="Enter name"
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <input
          type="email"
          id="email"
          value={state.email}
          placeholder="Enter email"
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <input type="submit" value={editIndex !== null ? "Update" : "Submit"} />
      </form>
      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el.name} - {el.email}
            <button onClick={() => editForm(i)}>Edit</button>
            <button onClick={() => deleteForm(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Localstorage;
