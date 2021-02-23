import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-react-96935-default-rtdb.firebaseio.com/',
});

export default instance;
