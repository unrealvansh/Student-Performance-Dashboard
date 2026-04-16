import React from "react";
import StudentRow from "./StudentRow";

function StudentTable(props) {
  let elements = [];
  
  if (props.mydata.length == 0) {
      return <h2>No data available.</h2>;
  }

  for(let i=0; i<props.mydata.length; i++) {
      elements.push(
          <StudentRow 
             info={props.mydata[i]} 
             changeMarks={props.changeMarks} 
             delStu={props.delStu} 
          />
      );
  }

  return (
    <div>
      <table border="1" cellPadding="5" id="tabl">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
