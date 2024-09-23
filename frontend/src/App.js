// App.js
import React, { useState } from "react";
import "./App.css"; // Importing CSS

function InputBox(){
  return(
    <div className="input-box">
      <form>
        <textarea type="text" placeholder="Here goes nothing" ></textarea>
        <br/>
        <button class="save" type="submit">Check</button>
      </form>
    </div>
  )
}

function App() {
  return(<>
    
    <div className="Central-text">
    <InputBox></InputBox>
    <t>place holder</t>
    </div>
    </>
  )
}

export default App;
