// src/azure-image-analysis.js
import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  try {
    const apiUrl = process.env.REACT_APP_AZURE_API_URL;
    console.log('apiUrl', apiUrl)
    
    const response = await axios.post(
      apiUrl,
      {
        url: imageUrl,
      },
      {

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

