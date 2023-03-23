import axios from 'axios';

const API_URL = 'http://localhost:3003';

const http = axios.create({
  baseURL: API_URL,
  timeout: 5000
});

const http_mock = axios.create({
  timeout: 5000
});

export const httpGet = async (url: string, queryParams: string, isMock: boolean = false) => {
  try {
    const response = isMock ? await http_mock.get(url) : await http.get(url);
    if (response.status !== 200) throw new Error(`HTTP error ${response.status}`);
    return response;
  } catch (error) {
    throw new Error('Server Error');
  }
};
export const httpPost = async (url: string, requestBody: string, isMock: boolean = false) => {
  try {
    const response = isMock
      ? await http_mock.post(url, JSON.stringify(requestBody))
      : await http.post(url, JSON.stringify(requestBody));
    if (response.status !== 200) throw new Error(`HTTP error ${response.status}`);
    return response;
  } catch (error) {
    throw new Error('Server Error');
  }
};
