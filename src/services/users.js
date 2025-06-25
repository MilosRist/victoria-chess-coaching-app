import axios from 'axios';
import config from '../config';

const baseUrl = '/api/users';

const getUser = async (userId) => {
    const response = await axios.get(`${config.apiBaseUrl}/api/users/${userId}`);
    return response.data;
  };


const addQuestion = async (questionId, token) => {
    try {
        const response = await axios.post(
            `${config.apiBaseUrl}/api/users/add-question`,
            { questionId }, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error adding question:', error.response?.data || error.message);
        throw error;
    }
};

export default { getUser, addQuestion };
