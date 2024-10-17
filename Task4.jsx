import React, { useRef, useState } from "react";
const Task4 = () => {
  const nameref = useRef(null);
  const emailref = useRef(null);
  const h1ref = useRef();

  function Submiteform(e) {
    e.preventDefault();
    console.log({
      name: nameref.current.value,
      email: emailref.current.value,
    });
    // h1ref.current.style.backgroundColor = "red";
    // nameref.current.focus()
  }
  return (
    <div>
      <h1 ref={h1ref}>Uncontrolled component</h1>
      <form onSubmit={Submiteform}>
        <input type="text" id="name" placeholder="enter name" ref={nameref} />

        <br />
        <input
          type="email"
          id="email"
          placeholder="enter email"
          ref={emailref}
        />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default Task4;
