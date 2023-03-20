# Log

## 1차 작업

- 작업에 기본적으로 필요한 라이브러리 설치
- MockAPI 생성
- 기본타입 생성
- 기본 페이지 생성

### Next

- 이전까지는 큰 생각이 필요없어도 할 수 있는 작업들
  - API 만들때는 고민이 살짝 필요하긴했지만, MockAPI의 목적은 서버로부터 받아올 데이터를 가정하고, 빠르게 목데이터를 넘기는게 아닐까
  - 그다지 설계가 필요없어도 될거라고 생각함
  - 차라리 하드코딩해서 빠르게 만들어가는게 더 도움이 될수도
- 어떻게 페이지를 만들어갈지 생가각하고 넘어가기
  - 상태를 어떻게 관리할까...
  - 이전 미션에서 컨텍스트 API를 사용해봤으니, 이번에도 한번 사용해봐야겠다.
- MSW 초기 렌더링에 문제가 있음
  - `Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`
    - 초기 설정의 문제 -> 코드 수정으로 해결
    ```
    if (getEnvMode() === 'production' || getEnvMode() === 'development') {
        worker.start();
      }
    ```
  - fetch를 써서 그런가? -> axios써보자

## 2차 작업

- 위의 MSW초기 실행 문제 해결
- 홈 화면 구성
- 약간의 반응형
- useFetch

### Next

- 상태관리 라이브러리 고민
