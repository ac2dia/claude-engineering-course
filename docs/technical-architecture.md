---
status: proposed
lastUpdated: 2026-07-18
---

# 기술 아키텍처

## MVP 방향

정적 콘텐츠 중심 사이트로 시작한다. 백엔드, 사용자 계정과 데이터베이스는 사용하지 않는다.

```text
MDX 콘텐츠
    ↓
Next.js 정적 빌드
    ├── 레슨과 실습
    ├── 단계적 힌트
    ├── 검색
    └── 진도 관리
    ↓
정적 호스팅/CDN

브라우저 localStorage
    ├── 완료 상태
    ├── 실습 단계
    ├── 힌트 상태
    ├── 메모와 회고
    └── 마지막 학습 위치
```

## 제안 기술

| 영역 | 기술 |
|---|---|
| 웹 프레임워크 | Next.js + TypeScript |
| 콘텐츠 | MDX |
| 스타일 | Tailwind CSS |
| 코드 표시 | Shiki |
| 콘텐츠 스키마 | Zod |
| 단위 테스트 | Vitest |
| 브라우저 테스트 | Playwright |
| 상태 저장 | localStorage |
| 배포 | 정적 호스팅 또는 CDN |

구체적인 패키지와 버전은 사이트 골격을 만들 때 공식 문서와 호환성을 확인해 결정한다.

## 주요 경로

```text
/
/learn
/learn/[part]/[lesson]
/labs/[lab]
/setup
/reference
/troubleshooting
```

## 콘텐츠 메타데이터 예시

```yaml
id: validate-claude-assumptions
title: Claude의 가정을 검증하며 디버깅하기
type: lab
difficulty: intermediate
estimatedMinutes: 90
prerequisites:
  - implement-in-small-steps
repositoryVersion: v0.1.0
startTag: lab-05-start
referenceTag: lab-05-reference
lastReviewed: 2026-07-18
```

## 진도 데이터 예시

```json
{
  "courseId": "claude-for-engineers",
  "courseVersion": "2026.1",
  "completedLessons": ["understand-claude"],
  "completedLabs": [],
  "lastVisited": "explore-with-evidence"
}
```

진도 데이터에는 민감한 코드, 로그, 자격 증명 또는 회사 정보를 저장하지 않는다.

## 저장소 연결

사이트 콘텐츠와 실습 코드는 별도 저장소에서 관리한다.

```text
claude-engineering-course
└── 사이트, MDX 콘텐츠, 학습 경험

globalpay-commerce-lab
├── Spring Boot 모듈형 모놀리스
├── Mock PSP와 Webhook 시뮬레이터
├── Docker Compose
└── 실습별 start/reference 태그
```

사이트의 과정 매니페스트는 실습 저장소 릴리스와 태그를 명시한다. 공개한 실습 태그는 변경하거나 재사용하지 않는다.

## 후속 확장 가능성

MVP 이후 필요하면 로그인, 서버 진도 동기화, 관리자 기능과 조직별 학습 분석을 추가할 수 있다. 이 가능성은 정적 MVP의 구현을 복잡하게 만들지 않는 범위에서만 고려한다.
