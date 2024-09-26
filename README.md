# 프로그래머스 미니 프로젝트

## Book Store

### API 설계

#### 회원 API

1. 회원 가입

| 항목                 | 내용                                 |
| -------------------- | ------------------------------------ |
| **Method**           | POST                                 |
| **URI**              | /join                                |
| **HTTP status code** | 성공 201                             |
| **Request Body**     |                                      |
|                      | email: "사용자가 입력한 이메일"      |
|                      | password: "사용자가 입력한 비밀번호" |
| **Response Body**    |                                      |

2. 로그인

| 항목                 | 내용                                 |
| -------------------- | ------------------------------------ |
| **Method**           | POST                                 |
| **URI**              | /login                               |
| **HTTP status code** | 성공 200                             |
| **Request Body**     |                                      |
|                      | email: "사용자가 입력한 이메일"      |
|                      | password: "사용자가 입력한 비밀번호" |
| **Response Body**    | JWT Token                            |

3. 비밀번호 초기화 요청

| 항목                 | 내용                            |
| -------------------- | ------------------------------- |
| **Method**           | PUT                             |
| **URI**              | /reset                          |
| **HTTP status code** | 성공 200                        |
| **Request Body**     |                                 |
|                      | email: "사용자가 입력한 이메일" |
| **Response Body**    |                                 |

4. 비밀번호 초기화 요청 (=수정)

| 항목                 | 내용                                 |
| -------------------- | ------------------------------------ |
| **Method**           | PUT                                  |
| **URI**              | /reset                               |
| **HTTP status code** | 성공 200                             |
| **Request Body**     |                                      |
|                      | password: "사용자가 입력한 비밀번호" |
| **Response Body**    |                                      |

#### 도서 API

1. 전체 도서 조회

| 항목                 | 내용                 |
| -------------------- | -------------------- |
| **Method**           | GET                  |
| **URI**              | /books               |
| **HTTP status code** | 성공 200             |
| **Request Body**     |                      |
| **Response Body**    |                      |
|                      | title: "도서 제목"   |
|                      | summary: "요약 설명" |
|                      | author: "도서 작가"  |
|                      | price: "가격"        |
|                      | likes: "좋아요 수"   |

2. 개별 도서 조회

| 항목                 | 내용                     |
| -------------------- | ------------------------ |
| **Method**           | GET                      |
| **URI**              | /books/{bookid}          |
| **HTTP status code** | 성공 200                 |
| **Request Body**     |                          |
| **Response Body**    |                          |
|                      | id: "도서 id"            |
|                      | title: "도서 제목"       |
|                      | category: "카테고리"     |
|                      | format: "포멧"           |
|                      | isbn: "ISBN"             |
|                      | summary: "요약 설명"     |
|                      | description: "상세 설명" |
|                      | author: "도서 작가"      |
|                      | pages: "쪽 수"           |
|                      | index: "목차"            |
|                      | price: "가격"            |
|                      | likes: "좋아요 수"       |
|                      | liked: "boolean"         |
|                      | pubDate: "출간일"        |

3. 카테고리별 도서 목록 조회

| 항목                 | 내용                                                                   |
| -------------------- | ---------------------------------------------------------------------- |
| **Method**           | GET                                                                    |
| **URI**              | /books?categoryid = {category}&new ={boolean} // true 신간, false 전체 |
| **HTTP status code** | 성공 200                                                               |
| **Request Body**     |                                                                        |
| **Response Body**    |                                                                        |
|                      | id: "도서 id"                                                          |
|                      | title: "도서 제목"                                                     |
|                      | summary: "요약 설명"                                                   |
|                      | author: "도서 작가"                                                    |
|                      | price: "가격"                                                          |
|                      | likes: "좋아요 수"                                                     |
|                      | pubDate: "출간일"                                                      |

#### 좋아요 API

1. 좋아요 추가

| 항목                 | 내용            |
| -------------------- | --------------- |
| **Method**           | PUT             |
| **URI**              | /likes/{bookid} |
| **HTTP status code** | 성공 200        |
| **Request Body**     |                 |
| **Response Body**    |                 |

2. 좋아요 취소

| 항목                 | 내용            |
| -------------------- | --------------- |
| **Method**           | PUT             |
| **URI**              | /likes/{bookid} |
| **HTTP status code** | 성공 200        |
| **Request Body**     |                 |
| **Response Body**    |                 |

#### 장바구니 API

1. 장바구니 담기

| 항목                 | 내용              |
| -------------------- | ----------------- |
| **Method**           | POST              |
| **URI**              | /cart             |
| **HTTP status code** | 성공 201          |
| **Request Body**     |                   |
|                      | bookId: "도서 id" |
|                      | count: "수량"     |
| **Response Body**    |                   |

2. 장바구니 조회

| 항목                 | 내용                 |
| -------------------- | -------------------- |
| **Method**           | GET                  |
| **URI**              | /cart                |
| **HTTP status code** | 성공 200             |
| **Request Body**     |                      |
| **Response Body**    |                      |
|                      | bookId: "도서 id"    |
|                      | title: "도서 제목"   |
|                      | summary: "도서 요약" |
|                      | count: "수량"        |
|                      | price: "가격"        |
|                      |                      |
|                      | bookId: "도서 id"    |
|                      | title: "도서 제목"   |
|                      | summary: "도서 요약" |
|                      | count: "수량"        |
|                      | price: "가격"        |

3. 장바구니 도서 삭제

| 항목                 | 내용           |
| -------------------- | -------------- |
| **Method**           | DELETE         |
| **URI**              | /cart/{bookid} |
| **HTTP status code** | 성공 200       |
| **Request Body**     |                |
| **Response Body**    |                |

#### 주문 API

1. 장바구니에서 선택할 주문 상품 목록 조회

| 항목                 | 내용                           |
| -------------------- | ------------------------------ |
| **Method**           | GET                            |
| **URI**              | /                              |
| **HTTP status code** | 성공 200                       |
| **Request Body**     |                                |
| **Response Body**    |                                |
|                      | cartItemId: "장바구니 도서 id" |
|                      | bookId: "도서 id"              |
|                      | title: "도서 제목"             |
|                      | summary: "도서 요약"           |
|                      | count: "수량"                  |
|                      | price: "가격"                  |
|                      |                                |
|                      | cartItemId: "장바구니 도서 id" |
|                      | bookId: "도서 id"              |
|                      | title: "도서 제목"             |
|                      | summary: "도서 요약"           |
|                      | count: "수량"                  |
|                      | price: "가격"                  |
