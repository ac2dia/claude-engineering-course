import type { Metadata } from "next";
import Link from "next/link";
import InvestigationMode from "../../../content/courses/claude-for-engineers/session-02/01-investigation-mode.mdx";
import TracePaymentFlow from "../../../content/courses/claude-for-engineers/session-02/02-trace-payment-flow.mdx";
import VerifyClaims from "../../../content/courses/claude-for-engineers/session-02/03-verify-claims.mdx";
import CheckAndReflect from "../../../content/courses/claude-for-engineers/session-02/04-check-and-reflect.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";
import { SessionStartGuide } from "../../components/session-start-guide";

export const metadata: Metadata = {
  title: "Session 2 · 근거를 요구하며 코드 탐색하기",
  description: "코드 변경 없이 결제 요청 흐름을 탐색하고 Claude의 주장을 파일 근거로 검증합니다.",
};

const sections = [
  ["01", "조사 모드와 근거", "#조사-모드와-근거의-기준"],
  ["02", "결제 흐름 추적", "#결제-요청-흐름-추적하기"],
  ["03", "주장 검증", "#claude의-주장을-코드로-검증하기"],
  ["04", "개념 확인과 회고", "#개념-확인과-두-번째-원칙"],
] as const;

export default function SessionTwoPage() {
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
          <p>SESSION 02 · 60 MIN</p>
          <h1>근거를 요구하며 코드 탐색하기</h1>
        </div>
        <nav aria-label="Session 2 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-02" sessionNumber="02" />
      </aside>

      <div className="lesson-main">
        <SessionStartGuide session="02" estimated="60분" labTag="lab-02-start" />
        <div className="lesson-intro">
          <p className="eyebrow">EXPLORE WITH EVIDENCE</p>
          <h2>설명을 듣는 데서 멈추지 않고,<br />근거까지 따라갑니다.</h2>
          <p>
            실제 주문·결제 코드베이스에서 하나의 API 흐름을 추적합니다.
            Claude가 제시한 파일과 호출 관계를 직접 확인하고, 코드로 알 수 없는
            내용은 가정으로 남깁니다.
          </p>
          <div className="session-objectives">
            <span>Plan mode</span>
            <span>호출 흐름</span>
            <span>코드 근거</span>
            <span>사실과 가정</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <InvestigationMode components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <TracePaymentFlow components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <VerifyClaims components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <CheckAndReflect components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
