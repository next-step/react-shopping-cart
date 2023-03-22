<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/3e6c6f30b11d4b098b5a3e81be19ce3a" width="400">
</p>
<h2 align="middle">장바구니</h2>
<p align="middle">React 데스크탑 장바구니 애플리케이션</p>
</p>

## 🚀 Getting Started

> 다수의 컴포넌트를 페이지로 구성하고 복잡해진 상태를 관리합니다.

✔️ 데스크탑 타겟의 웹 앱을 구현하며 구매로 이어지는 것에 끊김이 없고 재방문을 고려한 UI/UX에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 React만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ 상태 관리를 위한 전략을 설계하고 구상하여 확장을 열어둡니다.  
✔️ Router를 활용해 여러 페이지 전환을 고려합니다.  
✔️ [CSS Template](https://github.com/next-step/shopping-cart-css)

<br />

### 🕋 Server Guide

- 기본적으로 `MSW` 를 필수로 하고 있으며 서버는 필수가 아닙니다.
- `Schema`는 참고를 위함이니 자유롭게 변경 가능합니다.
- 자유롭게 `Mock Server`를 활용해주세요.

<br />

# 📝 Requirements

## 필수 요구사항
- [x] 오로지 React만으로 상태 관리
- [x] MSW를 활용한 API mocking
- [x] Endpoint만 변경하면 언제든 Real API를 바라볼 수 있다고 가정하고 상상합니다.
- [x] Real API 없이 로컬에서만 동작하는 상태로 리뷰 받는 것이 기본 원칙입니다.

## GNB
- [x] 로고를 누르면 상품목록 페이지로 이동한다.
- [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동한다.
- [x] 주문목록 버튼을 누르면 주문목록 페이지로 이동한다.

## 상품목록
- [x] 상품들은 n x 4 레이아웃으로 보여진다.
- [x] 상품들에는 사진, 이름, 금액이 보여진다.
- [x] 장바구니 버튼을 클릭하면 (**) / 자유롭게 구현 후 내용 작성

## 상품상세
- [] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
- [] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.

## 주문 상세
- [] 주문 정보가 보여진다.
- [] 장바구니 버튼을 클릭하면, 해당 상품이 장바구니에 담기고 장바구니 이동 선택 모달이 보여진다.
    - [] 장바구니 이동 버튼을 누르면 장바구니 페이지로 이동한다.

## UX/UI
- [] 반응형 레이아웃을 구현한다.
- [] 사용성 개선
    - [x] 사용자를 위한 로딩 환경 개선
    - [x] 상품이 없을 때와 같은 다양한 Edge Case 대응
    - [] 반응형 레이아웃 구현
    - [] 별도의 모바일 레이아웃 추가 제공
- [] 매출 증대 및 마케팅을 위해 별도의 기능 구현 (별도의 API 없음)
    - [] 브라우저 새로고침시 모든 상태 유지
    - [] 흐름을 고려한 맞춤 큐레이팅 상품 추천 기능
    - [] 구매 유도를 위한 상품 찜 페이지
- [] 매출 증대 및 마케팅을 위한 별도의 도구 추가
    - [] Google Analytics
    - [] Google Tag Manager

<br />

### 📝 API & DB Schema

#### 🎁 상품

##### 상품 목록 조회

| method | uri       |
| ------ | --------- |
| GET    | /products |

```json
{
	"response": [
		{
			"id": 1,
			"price": 10000,
			"name": "치킨",
			"imageUrl": "http://example.com/chicken.jpg"
		},
		{
			"id": 2,
			"price": 20000,
			"name": "피자",
			"imageUrl": "http://example.com/pizza.jpg"
		}
	]
}
```

##### 상품 추가

| method | uri       |
| ------ | --------- |
| POST   | /products |

```json
{
	"requestBody": {
		"products": {
			"price": 10000,
			"name": "치킨",
			"imageUrl": "http://example.com/chicken.jpg"
		}
	}
}
```

##### 상품 단일 조회

| method | uri            |
| ------ | -------------- |
| GET    | /products/{id} |

```json
{
	"response": {
		"id": 1,
		"price": 10000,
		"name": "치킨",
		"imageUrl": "http://example.com/chicken.jpg"
	}
}
```

##### 상품 단일 삭제

| method | uri            |
| ------ | -------------- |
| DELETE | /products/{id} |

```json
{
	"response": {}
}
```

#### 🛒 장바구니

##### 장바구니 아이템 목록 조회

| method | uri    |
| ------ | ------ |
| GET    | /carts |

```json
{
  "response": {
    "id": 1,
	  "product": {
			"name": "test",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 1
		},
	},
	{
    "id": 5,
		"product": {
			"name": "tes11111t",
			"price": 1234,
			"imageUrl": "test.com",
			"id": 10
		}
	},
}
```

##### 장바구니 아이템 추가

| method | uri    |
| ------ | ------ |
| POST   | /carts |

```json
{
	"requestBody": {
		"product": {
			"id": 10,
			"name": "tes11111t",
			"price": 1234,
			"imageUrl": "test.com"
		}
	}
}
```

##### 장바구니 아이템 단일 삭제

| method | uri             |
| ------ | --------------- |
| DELETE | /carts/{cartId} |

```json
{
	"response": {}
}
```

#### 🗒 주문

##### 주문 추가(주문하기)

| method | uri     |
| ------ | ------- |
| POST   | /orders |

```json
{
	"requestBody": {
		"orderDetails": [
			{
				"id": 1,
				"price": 10000,
				"name": "치킨",
				"imageUrl": "http://example.com/chicken.jpg",
				"quantity": 5
			},
			{
				"id": 2,
				"price": 20000,
				"name": "피자",
				"imageUrl": "http://example.com/pizza.jpg",
				"quantity": 3
			}
		]
	}
}
```

##### 주문 목록(내역) 조회

| method | uri     |
| ------ | ------- |
| GET    | /orders |

```json
{
	"response": [
		{
			"id": 1,
			"orderDetails": [
				{
					"id": 1,
					"price": 10000,
					"name": "치킨",
					"imageUrl": "http://example.com/chicken.jpg",
					"quantity": 5
				},
				{
					"id": 2,
					"price": 20000,
					"name": "피자",
					"imageUrl": "http://example.com/pizza.jpg",
					"quantity": 3
				}
			]
		},
		{
			"id": 2,
			"orderDetails": [
				{
					"id": 1,
					"price": 10000,
					"name": "치킨",
					"imageUrl": "http://example.com/chicken.jpg",
					"quantity": 5
				},
				{
					"id": 2,
					"price": 20000,
					"name": "피자",
					"imageUrl": "http://example.com/pizza.jpg",
					"quantity": 3
				}
			]
		}
	]
}
```

#### 주문 단일 조회

| method | uri          |
| ------ | ------------ |
| GET    | /orders/{id} |

```json
{
	"response": {
		"id": 1,
		"orderDetails": [
			{
				"id": 1,
				"price": 10000,
				"name": "치킨",
				"imageUrl": "http://example.com/chicken.jpg",
				"quantity": 5
			},
			{
				"id": 2,
				"price": 20000,
				"name": "피자",
				"imageUrl": "http://example.com/pizza.jpg",
				"quantity": 3
			}
		]
	}
}
```
