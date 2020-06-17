import React, { useState } from 'react';
import './App.css';
import Message from './Msg.js';

function App() {

  let [count,setCount] = useState(0);

  return (
    <div className="App">
      <Message counter = "count"/>
      <br/>
      <button onClick={()=>setCount(++count)}>
        update counter
      </button>
      
    </div>
  );
}

export default App;
