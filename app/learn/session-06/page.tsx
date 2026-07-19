import type { Metadata } from "next";
import Link from "next/link";
import FailureOracles from "../../../content/courses/claude-for-engineers/session-06/01-define-failure-oracles.mdx";
import ReviewTests from "../../../content/courses/claude-for-engineers/session-06/02-review-generated-tests.mdx";
import WebhookInbox from "../../../content/courses/claude-for-engineers/session-06/03-implement-webhook-inbox.mdx";
import AdversarialReview from "../../../content/courses/claude-for-engineers/session-06/04-verify-adversarially.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";

export const metadata: Metadata = {
  title: "Session 6 · 실패 조건을 이용해 결과 검증하기",
  description: "중복 PSP Webhook과 처리 실패 후 재수신을 테스트하여 Claude의 코드와 테스트를 함께 검증합니다.",
};

const sections = [
  ["01", "실패 조건 정의", "#중복-webhook을-실패-조건으로-정의하기"],
  ["02", "생성된 테스트 검토", "#생성된-실패-테스트-자체를-검증하기"],
  ["03", "Webhook inbox 구현", "#이벤트-기록과-상태-변경을-원자적으로-구현하기"],
  ["04", "반대 사례 검증", "#반대-사례로-검증하고-여섯-번째-원칙-세우기"],
] as const;

export default function SessionSixPage() {
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
          <p>SESSION 06 · 75 MIN</p>
          <h1>실패 조건으로 결과 검증하기</h1>
        </div>
        <nav aria-label="Session 6 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-06" sessionNumber="06" />
      </aside>

      <div className="lesson-main">
        <div className="lesson-intro">
          <p className="eyebrow">TEST THE FAILURE, NOT THE CLAIM</p>
          <h2>테스트가 있다는 사실보다,<br />무엇을 깨뜨리는지 봅니다.</h2>
          <p>
            같은 PSP Webhook을 반복 전달하고 처리 중 실패를 주입합니다. Claude가
            만든 테스트의 입력과 assertion을 직접 검토하고, 이벤트 기록과 결제
            변경이 함께 commit되거나 rollback되는지 반대 사례로 확인합니다.
          </p>
          <div className="session-objectives">
            <span>실패 오라클</span>
            <span>테스트 리뷰</span>
            <span>중복 수신</span>
            <span>재처리 보장</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <FailureOracles components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <ReviewTests components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <WebhookInbox components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <AdversarialReview components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
