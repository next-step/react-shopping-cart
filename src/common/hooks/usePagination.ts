import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { handleSelectPage } from 'domain/store/feature/product/productslice';
import { useEffect } from 'react';

const CURRENT_PAGE_KEY = 'page';

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const selectedProductPage = useAppSelector((state) => state.productReducer.selectedPage);

  const getLocationQuery = (query: string) => {
    return searchParams.get(query);
  };

  const currentPage = getLocationQuery(CURRENT_PAGE_KEY) === null ? 1 : Number(getLocationQuery(CURRENT_PAGE_KEY));

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const navigateToPage = (page: number) => {
    const url = `${location.pathname}?page=${page}`;
    navigate(url);
  };

  const handlePageNationButton = (page: number) => {
    navigateToPage(page);
    dispatch(handleSelectPage(page));
  };

  useEffect(() => {
    dispatch(handleSelectPage(currentPage));
  }, [currentPage]);

  return { selectedProductPage, handlePageNationButton };
};
