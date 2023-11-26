// ImageAnalyzer.js

import React, { useState } from 'react';
import axios from 'axios';

const ImageAnalyzer = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleAnalysis = async () => {
    if (selectedImage) {
      try {
        const endpoint = 'https://apppracticaazure.cognitiveservices.azure.com/vision/v4.0/analyze';
        const apiKey = '2f3d5c09acb4480b8b4150a46d9a3896';

        const formData = new FormData();
        formData.append('image', selectedImage);

        const response = await axios.post(endpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Ocp-Apim-Subscription-Key': apiKey,
          },
        });

        console.log('Analysis Result:', response.data);
      } catch (error) {
        console.error('Error analyzing image:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleAnalysis}>Analyze Image</button>
    </div>
  );
};

export default ImageAnalyzer;
