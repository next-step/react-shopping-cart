import axios from 'axios';

export const getProductItems = async (page: number) => {
  try {
    const response = await axios.get('/products', { params: { page } });
    return response.data;
  } catch (error: any) {
    return error.reponse;
  }
};

export const getData = async (url: string) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const postData = async (url: string, data: any) => {
  try {
    const response = await axios.post(url, JSON.stringify(data));
    return response;
  } catch (error: any) {
    return error.response;
  }
};
export const updateData = async (url: string, data: any) => {
  try {
    const response = await axios.put(url, JSON.stringify(data));
    return response;
  } catch (error: any) {
    return error.response;
  }
};
