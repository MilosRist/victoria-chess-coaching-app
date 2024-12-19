import axios from 'axios';

const baseUrl = '/api/users';

const getUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const addQuestion = async (userId, questionId) => {
  try {
    const response = await axios.post(`${baseUrl}/add-question`, {
      userId,
      questionId,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding question:', error.response?.data || error.message);
    throw error; // Handle this error in the component
  }
};

export default { getUser, addQuestion };
