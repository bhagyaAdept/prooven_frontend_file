import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || `https://us-central1-prooven-ceb0f.cloudfunctions.net/`
});
