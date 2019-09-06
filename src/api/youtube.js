import axios from 'axios';

const KEY = 'AIzaSyCLRyfpRfZNifGJmZYSiuA2Gflk_NOqNpU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', maxResults: 5, key: KEY }
});
