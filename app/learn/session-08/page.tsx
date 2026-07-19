import type { Metadata } from "next";
import Link from "next/link";
import PrepareReview from "../../../content/courses/claude-for-engineers/session-08/01-prepare-capstone-review.mdx";
import FourLensReview from "../../../content/courses/claude-for-engineers/session-08/02-review-four-lenses.mdx";
import PersonalWorkflow from "../../../content/courses/claude-for-engineers/session-08/03-build-personal-workflow.mdx";
import CompleteCourse from "../../../content/courses/claude-for-engineers/session-08/04-complete-the-course.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";

export const metadata: Metadata = {
  title: "Session 8 · 나만의 Claude 개발 워크플로 만들기",
  description: "전체 결제 변경을 독립 리뷰하고 반복 가능한 개인 Claude 개발 절차와 프로젝트 지침을 완성합니다.",
};

const sections = [
  ["01", "종합 리뷰 준비", "#종합-리뷰-범위와-독립-기준-세우기"],
  ["02", "네 관점의 전체 리뷰", "#네-가지-관점으로-전체-diff-다시-리뷰하기"],
  ["03", "개인 워크플로", "#개인-워크플로와-프로젝트-지침-완성하기"],
  ["04", "최종 원칙", "#참고-결과-비교와-최종-원칙"],
] as const;

export default function SessionEightPage() {
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
          <p>SESSION 08 · 60 MIN</p>
          <h1>나만의 개발 워크플로 만들기</h1>
        </div>
        <nav aria-label="Session 8 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-08" sessionNumber="08" />
      </aside>

      <div className="lesson-main">
        <div className="lesson-intro">
          <p className="eyebrow">MAKE THE LOOP YOURS</p>
          <h2>한 번의 좋은 prompt보다,<br />반복 가능한 판단 절차를 남깁니다.</h2>
          <p>
            세 세션에 걸친 결제 장애 처리 diff를 하나의 시스템으로 다시 봅니다.
            보안·성능·정합성·운영 가능성을 독립적으로 평가하고, 실제 업무에서
            재사용할 개인 워크플로와 프로젝트 지침을 완성합니다.
          </p>
          <div className="session-objectives">
            <span>전체 diff</span>
            <span>네 관점 리뷰</span>
            <span>CLAUDE.md</span>
            <span>개인 원칙</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <PrepareReview components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <FourLensReview components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <PersonalWorkflow components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <CompleteCourse components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
