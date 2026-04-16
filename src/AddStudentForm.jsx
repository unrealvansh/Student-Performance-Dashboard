import React, { useState } from "react";

function AddStudentForm(props) {
  const [n, setN] = useState("");
  const [m, setM] = useState("");

  function submit(e) {
    e.preventDefault();
    if (n == "" || m == "") {
      alert("pls enter details!");
    } else {
      props.myadd(n, m);
      setN("");
      setM("");
    }
  }

  function nameChange(e) {
      setN(e.target.value)
  }

  function scoreChange(e) {
      setM(e.target.value)
  }

  return (
    <div>
        <form onSubmit={submit} className="f1">
      <br />
      Name : <input value={n} onChange={nameChange} type="text" />
      <br /><br />
      Marks: <input value={m} onChange={scoreChange} type="number" />
        <br/><br/>
      <button>Submit Data</button>
      <br/><br/>
    </form>
    </div>
  );
}

export default AddStudentForm;
