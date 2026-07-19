import Link from "next/link";
import { CourseProgress } from "./components/learning-tools";

const sessions = [
  {
    number: "01",
    title: "Claude를 올바르게 이해하기",
    focus: "모델 · 도구 · 컨텍스트",
    duration: "60분",
    ready: true,
    href: "/learn/session-01",
  },
  {
    number: "02",
    title: "근거를 요구하며 코드 탐색하기",
    focus: "코드베이스 조사",
    duration: "60분",
    ready: true,
    href: "/learn/session-02",
  },
  {
    number: "03",
    title: "요구사항을 작업 계획으로 바꾸기",
    focus: "계획 · 완료 조건",
    duration: "75분",
    ready: true,
    href: "/learn/session-03",
  },
  {
    number: "04",
    title: "작게 구현하고 검증하기",
    focus: "멱등성 구현",
    duration: "75분",
    ready: true,
    href: "/learn/session-04",
  },
  {
    number: "05",
    title: "Claude의 가정을 검증하며 디버깅하기",
    focus: "PSP 타임아웃",
    duration: "90분",
    ready: true,
    href: "/learn/session-05",
  },
  {
    number: "06",
    title: "실패 조건을 이용해 결과 검증하기",
    focus: "중복 Webhook",
    duration: "75분",
    ready: true,
    href: "/learn/session-06",
  },
  {
    number: "07",
    title: "Claude와 의견이 다를 때 판단하기",
    focus: "이벤트 상태 전이",
    duration: "75분",
    ready: true,
    href: "/learn/session-07",
  },
  {
    number: "08",
    title: "나만의 Claude 개발 워크플로 만들기",
    focus: "종합 리뷰",
    duration: "60분",
  },
] as const;

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="홈으로 이동">
          <span className="brand-mark" aria-hidden="true">C/</span>
          <span>Claude Engineering</span>
        </Link>
        <nav className="topnav" aria-label="주요 메뉴">
          <a href="#curriculum">커리큘럼</a>
          <a href="#principles">학습 원칙</a>
          <a
            href="https://github.com/ac2dia/claude-engineering-course"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FOR JAVA · KOTLIN ENGINEERS</p>
          <h1>
            Claude에게 맡기는 법보다,
            <br />
            <em>함께 판단하는 법</em>을 배웁니다.
          </h1>
          <p className="hero-lede">
            실제 주문·결제 코드베이스를 오가며 Claude의 가정을 확인하고,
            생성된 변경을 테스트와 diff로 검증하는 8회 자율 학습 과정입니다.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/learn/session-01">
              Session 1 시작하기
              <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-ghost" href="#curriculum">
              전체 과정 보기
            </a>
          </div>
          <dl className="hero-facts">
            <div><dt>과정</dt><dd>8 Sessions</dd></div>
            <div><dt>분량</dt><dd>8–10 Hours</dd></div>
            <div><dt>방식</dt><dd>Local Practice</dd></div>
          </dl>
        </div>

        <aside className="field-note" aria-label="이 과정의 핵심 원칙">
          <div className="field-note-top">
            <span>FIELD NOTE / 001</span>
            <span>검증 책임</span>
          </div>
          <blockquote>
            “Claude가 구체적으로 답하더라도,
            <strong> 코드와 실행 결과를 확인하기 전에는</strong>
            프로젝트의 사실로 받아들이지 않는다.”
          </blockquote>
          <div className="agent-loop" aria-label="에이전트 작업 흐름">
            <span>조사</span><i>→</i><span>행동</span><i>→</i><span>검증</span>
          </div>
          <CourseProgress compact />
        </aside>
      </section>

      <section className="principles" id="principles">
        <div className="section-heading">
          <p className="eyebrow">LEARNING PRINCIPLES</p>
          <h2>결제는 실습 재료이고,<br />Claude가 학습의 중심입니다.</h2>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>조사와 구현을 분리합니다</h3>
            <p>관련 코드를 먼저 읽고, 확인된 사실과 가정을 나눈 뒤 계획을 검토합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>결과보다 판단을 기록합니다</h3>
            <p>Claude의 제안을 수정하거나 거절한 이유가 최종 코드만큼 중요합니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>실패 조건으로 검증합니다</h3>
            <p>타임아웃, 중복 Webhook, 뒤늦은 이벤트로 그럴듯한 해결책을 시험합니다.</p>
          </article>
        </div>
      </section>

      <section className="curriculum" id="curriculum">
        <div className="section-heading curriculum-heading">
          <div>
            <p className="eyebrow">CURRICULUM</p>
            <h2>퇴근 후 한 걸음씩,<br />8번의 개발 세션</h2>
          </div>
          <CourseProgress />
        </div>
        <div className="session-list">
          {sessions.map((session) => (
            <article className={`session-row ${session.ready ? "is-ready" : ""}`} key={session.number}>
              <span className="session-number">{session.number}</span>
              <div>
                <p>{session.focus}</p>
                <h3>{session.title}</h3>
              </div>
              <span className="session-duration">{session.duration}</span>
              {session.ready ? (
                <Link href={session.href} aria-label={`${session.title} 시작`}>
                  시작 <span aria-hidden="true">↗</span>
                </Link>
              ) : (
                <span className="coming-soon">준비 중</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Claude Engineering Course · MVP 2026.1</p>
        <p>개인 진도와 메모는 이 브라우저에만 저장됩니다.</p>
      </footer>
    </main>
  );
}
