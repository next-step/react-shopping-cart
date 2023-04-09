import { useNavigate, useLocation } from 'react-router-dom';
import { URL } from '../../constants/url';

const useRoute = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  const movePage = (path: string) => {
    if (!path) throw new Error('Invalid path');
    navigate(path);
  };
  const movePrevPage = () => {
    // TODO: 엣지 케이스 처리
    if (currentPage !== URL.HOME) navigate(-1);
  };

  return { movePage, movePrevPage, currentPage };
};

export default useRoute;
