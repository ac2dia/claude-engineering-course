import type { Metadata } from "next";
import Link from "next/link";
import ClaudeAndClaudeCode from "../../../content/courses/claude-for-engineers/session-01/01-claude-and-claude-code.mdx";
import AgenticLoop from "../../../content/courses/claude-for-engineers/session-01/02-agentic-loop.mdx";
import AmbiguousPaymentRequest from "../../../content/courses/claude-for-engineers/session-01/03-ambiguous-payment-request.mdx";
import CheckAndReflect from "../../../content/courses/claude-for-engineers/session-01/04-check-and-reflect.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";

export const metadata: Metadata = {
  title: "Session 1 · Claude를 올바르게 이해하기",
  description: "Claude 모델, Claude Code, 에이전트 루프와 개발자의 검증 책임을 학습합니다.",
};

const sections = [
  ["01", "Claude와 Claude Code", "#claude와-claude-code-구분하기"],
  ["02", "에이전트 루프", "#에이전트-루프와-개발자의-역할"],
  ["03", "모호한 요청 개선", "#모호한-결제-장애-요청-개선하기"],
  ["04", "개념 확인과 회고", "#개념-확인과-첫-번째-원칙"],
] as const;

export default function SessionOnePage() {
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
          <p>SESSION 01 · 60 MIN</p>
          <h1>Claude를 올바르게 이해하기</h1>
        </div>
        <nav aria-label="Session 1 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus />
      </aside>

      <div className="lesson-main">
        <div className="lesson-intro">
          <p className="eyebrow">MENTAL MODEL FIRST</p>
          <h2>코드를 만들기 전에,<br />도구를 이해합니다.</h2>
          <p>
            첫 세션에서는 코드를 수정하지 않습니다. Claude가 무엇을 알고,
            Claude Code가 어떤 방식으로 행동하며, 개발자가 어디에서 판단해야
            하는지 정확한 출발점을 만듭니다.
          </p>
          <div className="session-objectives">
            <span>모델과 도구 구분</span>
            <span>에이전트 루프</span>
            <span>근거 중심 요청</span>
            <span>개인 원칙</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <ClaudeAndClaudeCode components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <AgenticLoop components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <AmbiguousPaymentRequest components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <CheckAndReflect components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
