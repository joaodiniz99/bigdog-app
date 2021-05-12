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
  getImagesById(breed_id) {
      return apiClient.get(`/images/search?limit=13&breed_id=${breed_id}`); // https://api.thecatapi.com/v1/images/search?limit=20&breed_id=4
  }
}