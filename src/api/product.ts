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
    const { data } = await axios(`${process.env.REACT_APP_API_URL}/products`);
    return data.productsList;
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
      `${process.env.REACT_APP_API_URL}/detail/${productId}`
    );
    return data.productDetail;
  } catch (error) {
    console.error(error);
    return null;
  }
};
