import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


let api=process.env.REACT_APP_RAPID_API_KEY
// console.log("key",api)
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': api,
    "X-RapidAPI-Host" : "youtube-v31.p.rapidapi.com"
  },
};

export const FetchFormApi = async (url) => {
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
 return data;

};
