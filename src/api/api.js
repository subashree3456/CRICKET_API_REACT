//  youtube const API_KEY = "qZnM0O90ToIjBiq9GvT9382";
import axios from 'axios';

 // const API_KEY = "05f886e2-9752-42e1-8b05-32877f54059a";  // good api

 // my zumen const API_KEY = "56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26";

export const getMatches = async () => {
  // const axios = require('axios');


  const options = {
    method: 'GET',
    url: 'https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20',
    headers: {
      'X-RapidAPI-Key': '56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  };