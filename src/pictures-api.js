import axios from "axios";

const API_KEY = "JpQ7Zjb3OXgB8XBQH4PzqhCDLnhV6FKEv-Y_401W7VU";
const BASE_URL = "https://api.unsplash.com";

export const getPictures = async (query, page = 1, per_page = 12) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
