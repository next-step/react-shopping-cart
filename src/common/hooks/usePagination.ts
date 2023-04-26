import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { getProductList } from 'domain/store/feature/product/productslice';

const CURRENT_PAGE_KEY = 'page';

export const usePagination = () => {
  const [searchParams] = useSearchParams();

  const getLocationQuery = (query: string) => {
    return searchParams.get(query);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = getLocationQuery(CURRENT_PAGE_KEY) === null ? 1 : Number(getLocationQuery(CURRENT_PAGE_KEY));
  const dispatch = useAppDispatch();

  const navigateToPage = (page: number) => {
    const url = `${location.pathname}?page=${page}`;
    navigate(url);
  };

  const handlePageNationButton = (page: number) => {
    navigateToPage(page);
    dispatch(getProductList(page));
  };

  return { currentPage, handlePageNationButton };
};
