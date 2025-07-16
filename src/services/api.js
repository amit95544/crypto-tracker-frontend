import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coins:", error);
    return [];
  }
};