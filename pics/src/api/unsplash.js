import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID fd66fd89fc7919d7e2dbcaf536c744cbca42ff05ed3f0dd34b0620cc25910686'
  }
});