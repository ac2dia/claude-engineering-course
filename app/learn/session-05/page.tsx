import type { Metadata } from "next";
import Link from "next/link";
import Reproduce from "../../../content/courses/claude-for-engineers/session-05/01-reproduce-before-fixing.mdx";
import Hypotheses from "../../../content/courses/claude-for-engineers/session-05/02-test-competing-hypotheses.mdx";
import PreserveUncertainty from "../../../content/courses/claude-for-engineers/session-05/03-preserve-and-confirm-uncertainty.mdx";
import ReviewEvidence from "../../../content/courses/claude-for-engineers/session-05/04-review-debugging-evidence.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";

export const metadata: Metadata = {
  title: "Session 5 · Claude의 가정을 검증하며 디버깅하기",
  description: "PSP 승인 후 응답 유실을 경쟁 가설과 실행 증거로 좁히고 불확실 상태를 안전하게 처리합니다.",
};

const sections = [
  ["01", "응답 유실 재현", "#수정-전에-psp-응답-유실-재현하기"],
  ["02", "경쟁 가설 검증", "#경쟁-가설을-코드와-로그로-검증하기"],
  ["03", "불확실 상태 처리", "#불확실성을-보존하고-후속-확인하기"],
  ["04", "증거 검토와 회고", "#디버깅-증거-검토와-다섯-번째-원칙"],
] as const;

export default function SessionFivePage() {
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
          <p>SESSION 05 · 90 MIN</p>
          <h1>가정을 검증하며 디버깅하기</h1>
        </div>
        <nav aria-label="Session 5 목차">
          {sections.map(([number, title, href]) => (
            <a href={href} key={number}>
              <span>{number}</span>
              {title}
            </a>
          ))}
        </nav>
        <SessionStatus sessionId="session-05" sessionNumber="05" />
      </aside>

      <div className="lesson-main">
        <div className="lesson-intro">
          <p className="eyebrow">DEBUG THE ASSUMPTION</p>
          <h2>그럴듯한 원인보다,<br />반증 가능한 증거를 찾습니다.</h2>
          <p>
            PSP가 승인했지만 응답이 사라진 결제를 조사합니다. Claude의 첫 설명을
            곧바로 구현하지 않고 경쟁 가설을 세운 뒤, 불확실성을 보존하고 후속
            조회로 확정하는 안전한 흐름을 작은 테스트 루프로 만듭니다.
          </p>
          <div className="session-objectives">
            <span>증상과 원인</span>
            <span>경쟁 가설</span>
            <span>UNKNOWN 상태</span>
            <span>후속 확인</span>
          </div>
        </div>

        <article className="lesson-article mdx-content">
          <section className="lesson-section" data-step="01">
            <Reproduce components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="02">
            <Hypotheses components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="03">
            <PreserveUncertainty components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <ReviewEvidence components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
