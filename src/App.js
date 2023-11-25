
// src/App.js
import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const analysisResult = await analyzeImage(imageUrl);
      setResult(analysisResult);
    } catch (error) {
      setResult(null);
    }
  };

  return (
    <div>
      <h1>React Azure Image Analysis</h1>
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analizar</button>

      {result && (
        <div>
          <h2>Resultados:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
