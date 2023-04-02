import { css } from '@emotion/css';

import { Button } from 'components';
import { useRouter } from 'hooks';

import { AwkwardImage } from 'assets/images';

function DefaultFallback() {
  const { navigate } = useRouter();

  const handleClickButton = () => {
    navigate('/');
  };

  return (
    <section
      className={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        justify-content: center;
        padding: 30px;
      `}
    >
      <img src={AwkwardImage} alt="당황" width={100} height={100} />
      <h2
        className={css`
          font-size: 22px;
          font-weight: 700;
        `}
      >
        예상치 못한 에러가 발생했습니다.
      </h2>
      <div>페이지를 새로고침 하시거나 아래 버튼을 눌러 홈으로 이동해 주세요.</div>
      <Button type="primary" onClick={handleClickButton}>
        홈으로 가기
      </Button>
    </section>
  );
}

export default DefaultFallback;
