// src/azure-image-analysis.js
import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const apiUrl = process.env.VISION_ENDPOINT;
    console.log('API URL:', apiUrl)
    
    const response = await axios.post(
      apiUrl,
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
          'Ocp-Apim-Subscription-Key': process.env.VISION_KEY,
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

