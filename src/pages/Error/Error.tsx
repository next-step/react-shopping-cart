import React, { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';

import { routes } from '@/router';

import S from './Error.styled';

interface ErrorProps extends Partial<FallbackProps> {
  errorState?: number;
}

export function Error({ error, resetErrorBoundary, errorState }: ErrorProps) {
  useEffect(() => {
    // 이곳에서 상세 Error 내역을 log로 request!
  }, [error]);

  const errorMessage = errorState === 404 ? '페이지를 찾을 수 없습니다. 😯' : '에러가 발생했습니다. 😿';

  return (
    <S.ErrorWrapper>
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      <S.ErrorButton
        type="button"
        onClick={() => {
          window.location.href = routes.home;
        }}
      >
        홈으로 돌아가기
      </S.ErrorButton>
    </S.ErrorWrapper>
  );
}
