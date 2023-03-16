import axios from 'axios';

export interface ProductType {
  id?: number;
  name: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
  onClickAddCart?: () => void;
}
export const fetchProductList = async (): Promise<null | ProductType[]> => {
  try {
    const { data } = await axios(`${process.env.REACT_APP_API_PATH}/products`);
    return data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchProductDetail = async (
  productId: number
): Promise<null | ProductType> => {
  try {
    const { data } = await axios(
      `${process.env.REACT_APP_API_PATH}/products/${productId}`
    );
    return data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
