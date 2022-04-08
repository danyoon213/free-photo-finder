import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID _Mb0ihETy0KENxgH1DaVtLIWAoWH8m8KOFOAD3omaoA'
  }
});