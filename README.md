# Claude Engineering Course

서비스 회사의 소프트웨어 엔지니어가 Claude와 Claude Code를 개발 업무에 안전하고 효과적으로 활용하는 방법을 학습하는 자율 학습 과정입니다.

이 저장소에는 학습 사이트와 교육 콘텐츠가 들어갑니다. 학습자가 직접 수정하고 실행하는 Java/Kotlin + Spring Boot 코드는 별도의 `globalpay-commerce-lab` 저장소에서 관리합니다.

## 교육 목표

이 과정의 핵심은 결제 시스템 자체가 아니라 다음 역량입니다.

- Claude의 작동 개념과 한계를 이해한다.
- 모호한 개발 요청을 검증 가능한 작업으로 구체화한다.
- 코드베이스를 근거 기반으로 탐색한다.
- 구현 전에 Claude의 계획과 가정을 검토한다.
- 생성된 코드와 테스트 결과를 독립적으로 검증한다.
- Claude의 제안을 수정하거나 거절한 근거를 설명한다.
- 반복 가능한 개인 개발 워크플로를 만든다.

주문·글로벌 결제 도메인은 이러한 역량을 현실적인 환경에서 연습하기 위한 일관된 사례로 사용합니다.

## MVP 개요

- 대상: Claude를 개발 업무에 처음 활용하려는 Java/Kotlin + Spring Boot 엔지니어
- 방식: 학습 사이트 안내 + 로컬 Claude Code 실습
- 분량: 8회, 총 12~14시간 (Session 1은 3일 이상 분할 가능)
- 학습 속도: 하루 1~2시간의 개인 자율 학습
- 계정: 없음
- 진도: 브라우저 로컬 저장
- 평가: 개념 확인, 로컬 테스트, 코드 리뷰, 회고 기록

## 문서

- [프로젝트 개요](docs/project-overview.md)
- [학습 원칙](docs/learning-principles.md)
- [MVP 커리큘럼](docs/mvp-curriculum.md)
- [학습 경험](docs/learning-experience.md)
- [기술 아키텍처](docs/technical-architecture.md)
- [콘텐츠 작성 규칙](content/README.md)
- [의사결정 기록](docs/decisions/)

## 저장소 구분

```text
claude-engineering-course   학습 사이트와 콘텐츠
globalpay-commerce-lab      학습자가 사용하는 실습 코드와 Mock PSP
```

## 현재 상태

- 프로젝트와 MVP 학습 아키텍처 설계 완료
- 8개 세션의 학습 콘텐츠와 태그 기반 로컬 실습 완성
- Session 1을 4시간 20분으로 확장하고 CLI, JetBrains, 권한 모드, 메모리, `CLAUDE.md`, private gateway 추가
- 공식 Claude Code 문서를 기준으로 에이전트 루프, 컨텍스트, 권한 및 프로젝트 지침 검토
- 홈과 전체 Session 학습 사이트 구현
- MDX 콘텐츠 직접 렌더링
- 브라우저 기반 메모, 단계적 힌트와 개인 진도 저장 구현

각 실습 세션의 첫 페이지에서 `globalpay-commerce-lab`의 시작 태그와 작업 브랜치를 안내합니다.

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```bash
npm install
npm run dev
```

기본 개발 주소는 `http://localhost:3000`입니다.

## 검증

```bash
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```
