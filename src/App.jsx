import React, { useState } from "react";
import Head from "./Header";
import Table from "./StudentTable";
import Form1 from "./AddStudentForm";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Rahul", marks: 75 },
    { id: 2, name: "Priya", marks: 35 },
    { id: 3, name: "Amit", marks: 60 }
  ]);

  function changeMarks(id, newm) {
    let arr = [];
    for(let i=0; i<data.length; i++) {
        if(data[i].id == id) {
            data[i].marks = newm;
        }
        arr.push(data[i]);
    }
    setData(arr);
  }

  function delStu(id) {
    let arr2 = [];
    for(let i=0; i<data.length; i++){
        if(data[i].id != id){
            arr2.push(data[i])
        }
    }
    setData(arr2);
  }

  function add(n, m) {
    let obj = {
        id: Math.random(),
        name: n,
        marks: parseInt(m)
    };
    let newarr = [];
    for(let i=0; i<data.length; i++){
        newarr.push(data[i])
    }
    newarr.push(obj);
    setData(newarr);
  }

  return (
    <div id="main-div">
      <Head />
      <Form1 myadd={add} />
      <br/>
      <Table 
        mydata={data} 
        changeMarks={changeMarks} 
        delStu={delStu} 
      />
    </div>
  );
}

export default App;
