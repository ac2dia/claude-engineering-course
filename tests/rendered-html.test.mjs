import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the course home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Claude와 일하는 엔지니어/);
  assert.match(html, /함께 판단하는 법/);
  assert.match(html, /Session 1 시작하기/);
  assert.match(html, /결제는 실습 재료이고/);
  assert.match(html, /http:\/\/localhost(?::3000)?\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders Session 1 from MDX content", async () => {
  const response = await render("/learn/session-01");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Claude와 Claude Code 구분하기/);
  assert.match(html, /에이전트 루프와 개발자의 역할/);
  assert.match(html, /CLI 명령어와 권한 모드 익히기/);
  assert.match(html, /JetBrains와 private network에서 사용하기/);
  assert.match(html, /메모리와 CLAUDE\.md 설계하기/);
  assert.match(html, /Configure Third-Party Inference/);
  assert.match(html, /ANTHROPIC_BASE_URL/);
  assert.match(html, /모호한 결제 장애 요청 개선하기/);
  assert.match(html, /개념 확인과 첫 번째 원칙/);
  assert.match(html, /MY FIELD NOTE/);
  assert.match(html, /PROGRESSIVE HINTS/);
});

test("shows beginner checkpoints throughout the course", async () => {
  for (let session = 1; session <= 8; session += 1) {
    const pathname = `/learn/session-${String(session).padStart(2, "0")}`;
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /처음이라면 여기부터 확인하세요/);
    assert.match(html, /git status --short --branch/);
  }
});

test("includes accessible learning controls", async () => {
  const response = await render("/learn/session-01");
  const html = await response.text();

  assert.match(html, /<textarea/);
  assert.match(html, /Session 1 목차/);
  assert.match(html, /오늘은 여기까지/);
  assert.match(html, /브라우저에만 저장/);
});

test("renders Session 2 from MDX content", async () => {
  const response = await render("/learn/session-02");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /조사 모드와 근거의 기준/);
  assert.match(html, /결제 요청 흐름 추적하기/);
  assert.match(html, /Claude의 주장을 코드로 검증하기/);
  assert.match(html, /개념 확인과 두 번째 원칙/);
  assert.match(html, /Session 2 목차/);
  assert.match(html, /Session 2 완료하기/);
});

test("links ready Session 2 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-02"/);
  assert.match(html, /근거를 요구하며 코드 탐색하기/);
});

test("renders Session 3 from MDX content", async () => {
  const response = await render("/learn/session-03");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /요구사항을 행동 표로 바꾸기/);
  assert.match(html, /계획 전에 영향 범위 조사하기/);
  assert.match(html, /Claude의 작업 계획 리뷰하기/);
  assert.match(html, /개념 확인과 세 번째 원칙/);
  assert.match(html, /Session 3 목차/);
  assert.match(html, /Session 3 완료하기/);
  assert.match(html, /git switch --detach lab-03-start/);
  assert.match(html, /docs\/tickets\/payment-idempotency\.md/);
  assert.match(html, /github\.com\/ac2dia\/globalpay-commerce-lab/);
});

test("links ready Session 3 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-03"/);
  assert.match(html, /요구사항을 작업 계획으로 바꾸기/);
});

test("renders Session 4 from MDX content", async () => {
  const response = await render("/learn/session-04");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /구현 경계와 검증 계약 세우기/);
  assert.match(html, /실패 테스트부터 작업 지시하기/);
  assert.match(html, /작은 변경 단위로 멱등성 구현하기/);
  assert.match(html, /전체 diff 검증과 네 번째 원칙/);
  assert.match(html, /Session 4 목차/);
  assert.match(html, /Session 4 완료하기/);
  assert.match(html, /git switch -c session-04-work lab-04-start/);
  assert.match(html, /lab-04-reference/);
  assert.match(html, /github\.com\/ac2dia\/globalpay-commerce-lab/);
});

test("links ready Session 4 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-04"/);
  assert.match(html, /작게 구현하고 검증하기/);
});

test("renders Session 5 from MDX content", async () => {
  const response = await render("/learn/session-05");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /수정 전에 PSP 응답 유실 재현하기/);
  assert.match(html, /경쟁 가설을 코드와 로그로 검증하기/);
  assert.match(html, /불확실성을 보존하고 후속 확인하기/);
  assert.match(html, /디버깅 증거 검토와 다섯 번째 원칙/);
  assert.match(html, /Session 5 목차/);
  assert.match(html, /Session 5 완료하기/);
  assert.match(html, /git switch -c session-05-work lab-05-start/);
  assert.match(html, /lab-05-reference/);
  assert.match(html, /PspTimeoutCharacterizationTest/);
});

test("links ready Session 5 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-05"/);
  assert.match(html, /Claude의 가정을 검증하며 디버깅하기/);
});

test("renders Session 6 from MDX content", async () => {
  const response = await render("/learn/session-06");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /중복 Webhook을 실패 조건으로 정의하기/);
  assert.match(html, /생성된 실패 테스트 자체를 검증하기/);
  assert.match(html, /이벤트 기록과 상태 변경을 원자적으로 구현하기/);
  assert.match(html, /반대 사례로 검증하고 여섯 번째 원칙 세우기/);
  assert.match(html, /Session 6 목차/);
  assert.match(html, /Session 6 완료하기/);
  assert.match(html, /git switch -c session-06-work lab-06-start/);
  assert.match(html, /lab-06-reference/);
  assert.match(html, /PaymentWebhookCharacterizationTest/);
});

test("links ready Session 6 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-06"/);
  assert.match(html, /실패 조건을 이용해 결과 검증하기/);
});

test("renders Session 7 from MDX content", async () => {
  const response = await render("/learn/session-07");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /늦은 이벤트의 상태 역행 재현하기/);
  assert.match(html, /해결안과 트레이드오프 비교하기/);
  assert.match(html, /방향을 교정하며 최소 정책 구현하기/);
  assert.match(html, /결정과 diff를 검토하고 일곱 번째 원칙 세우기/);
  assert.match(html, /Session 7 목차/);
  assert.match(html, /Session 7 완료하기/);
  assert.match(html, /git switch -c session-07-work lab-07-start/);
  assert.match(html, /lab-07-reference/);
  assert.match(html, /lateDeclineCurrentlyRewindsAnApprovedPayment/);
});

test("links ready Session 7 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-07"/);
  assert.match(html, /Claude와 의견이 다를 때 판단하기/);
});

test("renders Session 8 from MDX content", async () => {
  const response = await render("/learn/session-08");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /종합 리뷰 범위와 독립 기준 세우기/);
  assert.match(html, /네 가지 관점으로 전체 diff 다시 리뷰하기/);
  assert.match(html, /개인 워크플로와 프로젝트 지침 완성하기/);
  assert.match(html, /참고 결과 비교와 최종 원칙/);
  assert.match(html, /Session 8 목차/);
  assert.match(html, /전체 과정 완료하기/);
  assert.match(html, /git switch -c session-08-work lab-08-start/);
  assert.match(html, /lab-08-reference/);
  assert.match(html, /docs\/tickets\/session-08-workflow-review\.md/);
  assert.match(html, /CLAUDE\.md/);
});

test("links ready Session 8 from the course home", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="\/learn\/session-08"/);
  assert.match(html, /나만의 Claude 개발 워크플로 만들기/);
  assert.doesNotMatch(html, /08[\s\S]*준비 중/);
});
