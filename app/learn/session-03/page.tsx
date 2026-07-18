import type { Metadata } from "next";
import Link from "next/link";
import RequirementsIntoExamples from "../../../content/courses/claude-for-engineers/session-03/01-turn-requirements-into-examples.mdx";
import InvestigateBeforePlanning from "../../../content/courses/claude-for-engineers/session-03/02-investigate-before-planning.mdx";
import ReviewThePlan from "../../../content/courses/claude-for-engineers/session-03/03-review-the-plan.mdx";
import CheckAndReflect from "../../../content/courses/claude-for-engineers/session-03/04-check-and-reflect.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";

export const metadata: Metadata = {
  title: "Session 3 · 요구사항을 작업 계획으로 바꾸기",
  description: "결제 멱등성 티켓을 검증 가능한 완료 조건과 근거 있는 작업 계획으로 바꿉니다.",
};

const sections = [
  ["01", "요구사항과 행동 표", "#요구사항을-행동-표로-바꾸기"],
  ["02", "영향 범위 조사", "#계획-전에-영향-범위-조사하기"],
  ["03", "작업 계획 리뷰", "#claude의-작업-계획-리뷰하기"],
  ["04", "개념 확인과 회고", "#개념-확인과-세-번째-원칙"],
] as const;

export default function SessionThreePage() {
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
          <p>SESSION 03 · 75 MIN</p>
          <h1>요구사항을 작업 계획으로 바꾸기</h1>
        </div>
        <nav aria-label="Session 3 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-03" sessionNumber="03" />
      </aside>

      <div className="lesson-main">
        <div className="lesson-intro">
          <p className="eyebrow">PLAN BEFORE CODE</p>
          <h2>모호한 티켓을,<br />검증 가능한 계획으로 바꿉니다.</h2>
          <p>
            결제 멱등성 요구사항을 행동 예시로 구체화하고 현재 코드의 영향 범위를
            조사합니다. Claude의 계획에서 숨은 가정과 누락을 찾아, 다음 세션에서
            바로 실행할 수 있는 작은 작업 순서로 다듬습니다.
          </p>
          <div className="session-objectives">
            <span>완료 조건</span>
            <span>영향 범위</span>
            <span>계획 리뷰</span>
            <span>실패 테스트</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <RequirementsIntoExamples components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <InvestigateBeforePlanning components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <ReviewThePlan components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <CheckAndReflect components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}

