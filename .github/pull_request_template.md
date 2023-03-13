# Pull Request Template

## 1. 가이드

### 1-1. 배포

> 배포된 페이지가 있다면 링크를 남겨주세요 (삭제)

- [LMS](https://edu.nextstep.camp)
- [CSS](next-step.github.io/shopping-cart-css)

### 1-2. 로컬 환경

```bash
# install
yarn

# run
yarn start

# server
yarn server

```

## 2. 리뷰 요청 ✍️

### 2-1. 어렵거나 아쉬웠던 점

### 2-2. 나누고 싶은 고민

1. 장바구니 페이지 (`src/routes/Cart.tsx`) 는 재사용될 컴포넌트가 없어서 CDD 로 작성되지 못했는데, 컴포넌트로 쪼개는 편이 나을지?
2. 원래 두번째 미션은 module css 로 하려고 했는데...  
   일단 페이지를 뽑아내야 할 것 같아서 이번에도 StyledComponent 로 했습니다.  
   module css 로 다시 도전을 해 볼지?
3. StyledComponent 에서 겹치는 스타일은 어떻게 하면 되는지? 가령, my-3 gap-3 같은 스타일은 어떻게 하면 되는지?

### 2-3. 중점적으로 리뷰받고 싶은 부분

### 2-4. 새로운 시도 혹은 미션을 통해 도전한 점

### 2-5. 도식화된 자료 혹은 작성된 이미지 형태의 설계 구조

## 3. 질문있어요 🙋

## 4. 요구 사항 ✅

> 예시를 참고하여 체크 박스를 활용해주세요 (삭제)

### 4-1. 필수 요구사항

- [ ] `Storybook` 상호 작용 테스트
- [ ] `MSW`를 활용한 `API mocking`

### 4-2. 선택 요구사항 (심화)

- [ ] 반응형 레이아웃을 구현한다.
