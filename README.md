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
| **Request Body**     |                                      |
|                      | password: "사용자가 입력한 비밀번호" |
| **Response Body**    |                                      |
