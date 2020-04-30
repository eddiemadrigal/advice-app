import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    getAdvice();
  }, [])

  function getAdvice() {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then(res => {
        const { advice } = res.data.slip;
        console.log(advice);
        setAdvice(advice);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <h1>{ advice }</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
