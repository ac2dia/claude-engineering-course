import type { Metadata } from "next";
import Link from "next/link";
import ReproduceRegression from "../../../content/courses/claude-for-engineers/session-07/01-reproduce-state-regression.mdx";
import CompareSolutions from "../../../content/courses/claude-for-engineers/session-07/02-compare-solutions.mdx";
import SteerImplementation from "../../../content/courses/claude-for-engineers/session-07/03-steer-the-implementation.mdx";
import ReviewDecision from "../../../content/courses/claude-for-engineers/session-07/04-review-the-decision.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";
import { SessionStartGuide } from "../../components/session-start-guide";

export const metadata: Metadata = {
  title: "Session 7 · Claude와 의견이 다를 때 판단하기",
  description: "잘못된 이벤트 순서에서 해결안의 트레이드오프를 비교하고 Claude의 방향을 근거로 교정합니다.",
};

const sections = [
  ["01", "상태 역행 재현", "#늦은-이벤트의-상태-역행-재현하기"],
  ["02", "해결안 비교", "#해결안과-트레이드오프-비교하기"],
  ["03", "구현 방향 교정", "#방향을-교정하며-최소-정책-구현하기"],
  ["04", "결정과 diff 검토", "#결정과-diff를-검토하고-일곱-번째-원칙-세우기"],
] as const;

export default function SessionSevenPage() {
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
          <p>SESSION 07 · 75 MIN</p>
          <h1>의견이 다를 때 판단하기</h1>
        </div>
        <nav aria-label="Session 7 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-07" sessionNumber="07" />
      </aside>

      <div className="lesson-main">
        <SessionStartGuide session="07" estimated="75분" labTag="lab-07-start" />
        <div className="lesson-intro">
          <p className="eyebrow">DISAGREE WITH EVIDENCE</p>
          <h2>취향으로 반대하지 않고,<br />반례와 기준으로 교정합니다.</h2>
          <p>
            승인 뒤 늦게 도착한 거절 이벤트가 결제 상태를 되돌리는 사례를 다룹니다.
            Claude의 첫 해결안과 다른 대안을 같은 기준으로 비교하고, 합의한 상태
            전이만 최소 정책으로 구현하도록 작업 방향을 교정합니다.
          </p>
          <div className="session-objectives">
            <span>대안 비교</span>
            <span>반례 제시</span>
            <span>상태 전이</span>
            <span>방향 교정</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <ReproduceRegression components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <CompareSolutions components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <SteerImplementation components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <ReviewDecision components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
