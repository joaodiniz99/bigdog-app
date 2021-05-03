import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  withCredentials: false,
  headers: {
    'x-api-key': process.env.API_KEY
  }
})

export default {
    getBreeds() {
        return apiClient.get('/breeds'); // https://api.thedogapi.com/v1/breeds
    },
    // getById() {
    //     return apiClient
    // }
}