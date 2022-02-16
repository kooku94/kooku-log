---
title: 책 소개
---

## 프레임워크 없는 프론트엔드 개발

<img
src={require("./images/book.jpeg").default}
width="300"
alt="book"
/>

<table>
  <tr>
    <th>저자</th>
    <td>프란세스코 스트라츨로</td>
  </tr>
  <tr>
    <th>옮긴이</th>
    <td>류영선</td>
  </tr>
</table>

### 목차

#### 1장. 프레임워크에 대한 이야기

- 프레임워크란?
  - 프레임워크와 라이브러리 비교
- 프레임워크 방식
- 자바스크립트 프레임워크 연혁
  - 제이쿼리
  - 앵귤러JS
  - 리액트
  - 앵귤러
- 기술 부채
  - 프레임워크 비용
- 기술 투자
- 요약

#### 2장. 렌더링

- 문서 객체 모델
- 렌더링 성능 모니터링
  - 크롬 개발자 도구
  - stats.js
  - 사용자 정의 성능 위젯
- 렌더링 함수
  - TodoMVC
  - 순수 함수 렌더링
- 동적 데이터 렌더링
  - 가상 DOM
- 요약

#### 3장. DOM 이벤트 관리

- YAGNI 원칙
- DOM 이벤트 API
  - 속성에 핸들러 연결
  - addEventListener로 핸들러 연결
  - 이벤트 객체
  - DOM 이벤트 라이프사이클
  - 사용자 정의 이벤트 사용
- TodoMVC에 이벤트 추가
  - 렌더링 엔진 리뷰
  - 기본 이벤트 처리 아키텍처
- 이벤트 위임
- 요약

#### 4장. 웹 구성 요소

- API
  - 사용할 수 있을까?
  - 사용자 정의 요소
- TodoMVC에 웹 구성 요소 사용
- 웹 구성 요소와 렌더링 함수
  - 코드 스타일
  - 테스트 가능성
  - 휴대성
  - 커뮤니티
- 사라지는 프레임워크
- 요약

#### 5장. HTTP 요청

- 간단한 역사: AJAX의 탄생
- todo 리스트 REST 서버
  - REST
- 코드 예제
  - 기본 구조
  - XMLHttpRequest
  - Fetch
  - Axios
  - 아키텍처 검토
- 적합한 HTTP API를 선택하는 방법
  - 호환성
  - 휴대성
  - 발전성
  - 보안
  - 학습 곡선
- 요약

#### 6장. 라우팅

- 단일 페이지 애플리케이션
- 코드 예제
  - 프래그먼트 식별자
  - 히스토리 API
- Navigo
- 올바른 라우터를 선택하는 방법
- 요약

#### 7장. 상태 관리

- ToDoMVC 애플리케이션 리뷰
- 모델-뷰-컨트롤러
  - 옵저버블 모델
- 반응형 프로그래밍
  - 반응형 모델
  - 네이티브 프록시
- 이벤트 버스
  - 프레임워크 없는 구현
  - Redux
- 상태 관리 전략 비교
  - 모델-뷰-컨트롤러
  - 반응형 프로그래밍
  - 이벤트 버스
- 요약

#### 8장. 적합한 작업을 위한 적합한 도구

- 자바스크립트 피로
- '적합한' 프레임워크
- 안티패턴
  - 노후화에 대한 두려움
  - 하이프 곡선 따르기
  - 일반적인 경로
  - 전문가
  - 분노 주도 결정
- 프레임워크 없는 운동 선언문
  - 첫 번째 원칙
  - 두 번째 원칙
  - 세 번째 원칙
  - 네 번째 원칙
- 도구
  - 마테오 바카리의 도구
  - 트레이드오프 슬라이드
  - 프레임워크 나침반 차트
  - 다른 도구
- 요약