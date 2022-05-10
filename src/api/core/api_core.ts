import axios from 'axios';
import ApiLinks from 'api/core/api_links';

const instance = axios.create({
  baseURL: ApiLinks.baseURL,
});

export default instance;
