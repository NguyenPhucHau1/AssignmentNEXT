import axios from 'axios';

const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', { email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
};
