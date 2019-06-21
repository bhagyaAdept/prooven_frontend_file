import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || `https://us-central1-php-test-2accd.cloudfunctions.net/helloWorld`
});
