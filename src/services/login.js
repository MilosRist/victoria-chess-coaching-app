import axios from 'axios'

const baseUrl = 'https://victoria-chess-coaching-app.onrender.com/api/login';

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }