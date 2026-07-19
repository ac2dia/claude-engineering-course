import type { Metadata } from "next";
import Link from "next/link";
import ExecutionBoundaries from "../../../content/courses/claude-for-engineers/session-04/01-set-execution-boundaries.mdx";
import FailingTests from "../../../content/courses/claude-for-engineers/session-04/02-start-with-failing-tests.mdx";
import SmallLoops from "../../../content/courses/claude-for-engineers/session-04/03-implement-in-small-loops.mdx";
import VerifyAndReflect from "../../../content/courses/claude-for-engineers/session-04/04-verify-diff-and-reflect.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";
import { SessionStartGuide } from "../../components/session-start-guide";

export const metadata: Metadata = {
  title: "Session 4 · 작게 구현하고 검증하기",
  description: "실패 테스트와 작은 변경 루프로 결제 멱등성을 구현하고 전체 diff를 검증합니다.",
};

const sections = [
  ["01", "구현과 검증 경계", "#구현-경계와-검증-계약-세우기"],
  ["02", "실패 테스트", "#실패-테스트부터-작업-지시하기"],
  ["03", "작은 구현 루프", "#작은-변경-단위로-멱등성-구현하기"],
  ["04", "diff 검증과 회고", "#전체-diff-검증과-네-번째-원칙"],
] as const;

export default function SessionFourPage() {
  return (
    <main className="learning-shell">
      <header className="learning-topbar">
        <Link href="/" className="brand" aria-label="과정 홈으로 이동">
          <span className="brand-mark" aria-hidden="true">C/</span>
          <span>Claude Engineering</span>
        </Link>
        <div className="learning-top-progress">
          <span>전체 과정</span>
          <CourseProgress inline />
        </div>
      </header>

      <aside className="lesson-sidebar">
        <Link className="back-link" href="/">← 과정 홈</Link>
        <div className="lesson-identity">
          <p>SESSION 04 · 75 MIN</p>
          <h1>작게 구현하고 검증하기</h1>
        </div>
        <nav aria-label="Session 4 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-04" sessionNumber="04" />
      </aside>

      <div className="lesson-main">
        <SessionStartGuide session="04" estimated="75분" labTag="lab-04-start" />
        <div className="lesson-intro">
          <p className="eyebrow">SMALL LOOPS, REAL EVIDENCE</p>
          <h2>한 번에 작게 바꾸고,<br />매번 증거를 확인합니다.</h2>
          <p>
            Session 3의 계획을 실패 테스트와 최소 구현으로 나눕니다. Claude가
            실행한 명령과 생성한 diff를 단계마다 검토하고, 마지막에는 동시 요청과
            데이터베이스 정합성까지 독립적으로 확인합니다.
          </p>
          <div className="session-objectives">
            <span>실패 테스트</span>
            <span>최소 변경</span>
            <span>집중 검증</span>
            <span>전체 diff</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <ExecutionBoundaries components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <FailingTests components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <SmallLoops components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <VerifyAndReflect components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
