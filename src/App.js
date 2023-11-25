import React from 'react';
import {analyzeImage} from './azure-image-analysis.js';
import './App.css';

function App() {

  function handledAnalizarButton () {
    analyzeImage()
    };

  return <div>
    
    
    <h1>Computer Vision</h1>
    <input className='' placeholder='URL'></input>
    <button
    onClick={() => handledAnalizarButton()}
    
    >Submit</button>
    
    </div>;
}


 
      

export default App;
