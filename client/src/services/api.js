import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/questions'; // Adjust as necessary

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return [];
  }
};
