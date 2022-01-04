import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.54.8:2022',
  responseType: 'json',
});
