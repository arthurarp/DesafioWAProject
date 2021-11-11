import axios from 'axios';

const apiQuestions = axios.create({
  baseURL: 'https://opentdb.com/',
});

export default apiQuestions;
