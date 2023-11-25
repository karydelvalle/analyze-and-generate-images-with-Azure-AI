// src/azure-image-analysis.js
import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_AZURE_API_ENDPOINT,
      {
        url: imageUrl,
      },
      {
        params: {
          visualFeatures: 'Categories,Description,Color',
          details: 'Landmarks',
        },
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al analizar la imagen:', error);
    throw error;
  }
};

export default analyzeImage;

