import type { Metadata } from "next";
import Link from "next/link";
import ClaudeAndClaudeCode from "../../../content/courses/claude-for-engineers/session-01/01-claude-and-claude-code.mdx";
import AgenticLoop from "../../../content/courses/claude-for-engineers/session-01/02-agentic-loop.mdx";
import CliAndModes from "../../../content/courses/claude-for-engineers/session-01/03-cli-and-permission-modes.mdx";
import JetBrainsAndPrivateNetwork from "../../../content/courses/claude-for-engineers/session-01/04-jetbrains-and-private-network.mdx";
import MemoryAndClaudeMd from "../../../content/courses/claude-for-engineers/session-01/05-memory-and-claude-md.mdx";
import SessionsContextAndCheckpoints from "../../../content/courses/claude-for-engineers/session-01/06-sessions-context-and-checkpoints.mdx";
import AmbiguousPaymentRequest from "../../../content/courses/claude-for-engineers/session-01/03-ambiguous-payment-request.mdx";
import CheckAndReflect from "../../../content/courses/claude-for-engineers/session-01/04-check-and-reflect.mdx";
import { mdxComponents } from "../../components/mdx-components";
import { CourseProgress, SessionStatus } from "../../components/learning-tools";
import { SessionStartGuide } from "../../components/session-start-guide";

export const metadata: Metadata = {
  title: "Session 1 · Claude를 올바르게 이해하기",
  description: "Claude의 구조, CLI, JetBrains, 권한 모드, 세션, 컨텍스트, 메모리와 CLAUDE.md를 학습합니다.",
};

const sections = [
  ["01", "Claude와 Claude Code", "#claude와-claude-code-구분하기"],
  ["02", "에이전트 루프", "#에이전트-루프와-개발자의-역할"],
  ["03", "CLI와 권한 모드", "#cli-명령어와-권한-모드-익히기"],
  ["04", "JetBrains와 사내망", "#jetbrains와-private-network에서-사용하기"],
  ["05", "메모리와 CLAUDE.md", "#메모리와-claudemd-설계하기"],
  ["06", "세션과 checkpoint", "#세션-컨텍스트와-checkpoint-관리하기"],
  ["07", "모호한 요청 개선", "#모호한-결제-장애-요청-개선하기"],
  ["08", "개념 확인과 회고", "#개념-확인과-첫-번째-원칙"],
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
          <p>SESSION 01 · 5 HOURS</p>
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
        <SessionStartGuide session="01" estimated="5시간" />
        <div className="lesson-intro">
          <p className="eyebrow">MENTAL MODEL FIRST</p>
          <h2>코드를 만들기 전에,<br />도구를 이해합니다.</h2>
          <p>
            첫 세션에서는 코드를 수정하지 않습니다. Claude의 구조부터 CLI와
            JetBrains, 권한 모드, 세션, 메모리, CLAUDE.md, private gateway까지 실제
            업무를 시작하기 전에 필요한 정신 모델과 안전 기준을 만듭니다.
          </p>
          <div className="session-objectives">
            <span>모델과 도구 구분</span>
            <span>에이전트 루프</span>
            <span>CLI · JetBrains</span>
            <span>메모리 · CLAUDE.md</span>
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
            <CliAndModes components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="04">
            <JetBrainsAndPrivateNetwork components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="05">
            <MemoryAndClaudeMd components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="06">
            <SessionsContextAndCheckpoints components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="07">
            <AmbiguousPaymentRequest components={mdxComponents} />
          </section>
          <section className="lesson-section" data-step="08">
            <CheckAndReflect components={mdxComponents} />
          </section>
        </article>
      </div>
    </main>
  );
}
