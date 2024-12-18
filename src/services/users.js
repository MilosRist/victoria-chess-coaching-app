import axios from 'axios';

const baseUrl = '/api/users';

const getUser = async (userId) => {
  const response = await axios.get(`${baseUrl}/${userId}`);
  return response.data;
};

const addQuestion = async (userId, questionId) => {
  const response = await axios.post(`${baseUrl}/add-question`, {
    userId,
    questionId,
  });
  return response.data;
};

export default { getUser, addQuestion };
