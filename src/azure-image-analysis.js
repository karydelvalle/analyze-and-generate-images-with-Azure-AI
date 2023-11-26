// ImageAnalyzer.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageAnalyzer = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAnalysis = async () => {
    if (imageUrl) {
      try {
        const endpoint = 'https://apppracticaazure.cognitiveservices.azure.com/vision/v4.0/analyze';
        const apiKey = '2f3d5c09acb4480b8b4150a46d9a3896';

        const params = {
          visualFeatures: 'Categories,Description',
          details: 'Celebrities,Landmarks',
          language: 'en',
        };

        const response = await axios.post(endpoint, { url: imageUrl }, {
          params,
          headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
          },
        });

        setAnalysisResult(response.data);
      } catch (error) {
        console.error('Error analyzing image:', error);
        setAnalysisResult(null);
      }
    }
  };

  return (
    <div>
      <h2>Azure Computer Vision App</h2>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={handleUrlChange} />
      </label>
      <button onClick={handleAnalysis}>Analyze Image</button>

      {analysisResult && (
        <div>
          <h3>Analysis Result:</h3>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
