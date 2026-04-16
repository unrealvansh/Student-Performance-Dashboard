import React from "react";

function StudentRow(props) {
  let isPass = "Fail";
  let col = "red";
  if (props.info.marks > 39) {
    isPass = "Pass";
    col = "green";
  }

  function doChange(e) {
    props.changeMarks(props.info.id, e.target.value);
  }

  function doDel() {
    props.delStu(props.info.id);
  }

  return (
    <tr>
      <td><b>{props.info.name}</b></td>
      <td>
        <input value={props.info.marks} onChange={doChange} type="number" />
      </td>
      <td><span style={{color: col}}>{isPass}</span></td>
      <td>
        <button onClick={doDel} className="dele">DELETE</button>
      </td>
    </tr>
  );
}

export default StudentRow;
