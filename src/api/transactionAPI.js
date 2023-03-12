import axios from 'axios';

export const getUsers = () => {
  return axios.get('/posts');
};


//for JWT Authorization Included code

// import axios from 'axios';

// export const getUsers = (token) => {
//   return axios.get('/api/users', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };