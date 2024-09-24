// App.js
import React, { useState } from "react";
import "./App.css"; // Importing CSS
import axios from 'axios'
function InputBox({onSubmit}){
  const[input,setinput]=useState("");
  const handlechange=(event)=>{
    setinput(event.target.value);
  }
  const handlesubmit=()=>{
    console.log(input);
    onSubmit(input);
  }
  return(
    <div className="input-box">

        <textarea type="text" placeholder="Here goes nothing" value={input} onChange={handlechange}></textarea>
        <button className="save"  onClick={handlesubmit}>Check</button>
      
    </div>
  )
}
function Title(){
  return(<>
  <h1 className="Title">AI-CONTENT DETECTOR</h1>
  </>)
}

function ToggleButton({val,isActive}){
  return(
  <>
  <button className={`tbutn ${isActive ? "active" : ""}`}>{val}</button>
  </>
  )
}

function App() {
  const[Result,setResult]=useState(null);
  const handleSubmit = (input) => {
    console.log("bbsjjh");
    if (input.length % 2 === 0) {
      setResult("YES");
    } else {
      setResult("NO");
    }
  };
  
  return(<>
    
    <div className="Central-text">
    <Title></Title>
    <div className="ToggleButtonBar">
    <ToggleButton val={"YES"} isActive={Result === "YES"} />
    <ToggleButton val={"NO"} isActive={Result === "NO"} />
    </div>
    <InputBox onSubmit={handleSubmit}/>
    </div>
    </>
  )
}

export default App;
