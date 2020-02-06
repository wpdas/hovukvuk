import axios from 'axios';

const API_URL = 'localhost:5000';

const images = async () => {
  return await axios.get(`http://${API_URL}/api/image`);
}

const songLink = `http://${API_URL}/api/audio`;

export default {
  images,
  songLink,
};