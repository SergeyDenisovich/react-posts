import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/posts',
});

export const postsAPI = {
  getPosts() {
    return instance.get('?_limit=10').then((response) => response.data);
  },
};
