import axios from 'axios';

const baseUrl = 'https://victoria-chess-coaching-app.onrender.com/api/register'; // Adjust the endpoint if needed

const register = async (userData) => {
  const response = await axios.post(baseUrl, userData);
  return response.data;
};

export default { register };
