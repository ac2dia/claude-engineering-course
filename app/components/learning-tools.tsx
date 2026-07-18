"use client";

import Link from "next/link";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useSyncExternalStore,
} from "react";

const PREFIX = "claude-engineering-course:";
const PROGRESS_EVENT = "claude-course-progress";

function readValue(key: string) {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(`${PREFIX}${key}`) ?? "";
}

function writeValue(key: string, value: string) {
  window.localStorage.setItem(`${PREFIX}${key}`, value);
  window.dispatchEvent(new Event(PROGRESS_EVENT));
}

function subscribeToProgress(callback: () => void) {
  window.addEventListener(PROGRESS_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(PROGRESS_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function useStorageValue(key: string) {
  const value = useSyncExternalStore(
    subscribeToProgress,
    () => readValue(key),
    () => "",
  );

  const update = (next: string) => {
    setValue(next);
    writeValue(key, next);
  };

  return [value, update] as const;
}

export function LearningNote({
  id,
  prompt,
  multiline = false,
}: {
  id: string;
  prompt: string;
  multiline?: boolean;
}) {
  const [value, setValue] = useStorageValue(`note:${id}`);

  return (
    <div className="learning-note">
      <label htmlFor={id}>
        <span>MY FIELD NOTE</span>
        {prompt}
      </label>
      <textarea
        id={id}
        rows={multiline ? 7 : 4}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="정답보다 지금의 판단을 기록해 보세요. 이 내용은 브라우저에만 저장됩니다."
      />
      <p>{value ? "이 브라우저에 저장됨" : "아직 기록하지 않음"}</p>
    </div>
  );
}

type HintElement = ReactElement<{ visible?: boolean; index?: number }>;

export function ProgressiveHints({ children }: { children: ReactNode }) {
  const hintCount = Children.count(children);
  const [stored, setStored] = useStorageValue("hints:session-01-request");
  const visible = Number(stored || 0);

  return (
    <div className="progressive-hints">
      <div className="hints-heading">
        <div>
          <span>PROGRESSIVE HINTS</span>
          <strong>필요한 만큼만 열어보세요</strong>
        </div>
        <span>{visible}/{hintCount}</span>
      </div>
      <div className="hint-list">
        {Children.map(children, (child, index) =>
          isValidElement(child)
            ? cloneElement(child as HintElement, {
                visible: index < visible,
                index: index + 1,
              })
            : child,
        )}
      </div>
      {visible < hintCount ? (
        <button type="button" onClick={() => setStored(String(visible + 1))}>
          힌트 {visible + 1} 열기
          <span aria-hidden="true">＋</span>
        </button>
      ) : (
        <button type="button" className="hint-reset" onClick={() => setStored("0")}>
          힌트 다시 접기
        </button>
      )}
    </div>
  );
}

export function Hint({
  title,
  children,
  visible = true,
  index = 1,
}: {
  level?: number;
  title: string;
  children: ReactNode;
  visible?: boolean;
  index?: number;
}) {
  if (!visible) return null;
  return (
    <div className="hint-card">
      <span>0{index}</span>
      <div><strong>{title}</strong>{children}</div>
    </div>
  );
}

export function EndSession({
  sessionId,
  label,
}: {
  sessionId: string;
  label: string;
  next?: string;
}) {
  const [completed, setCompleted] = useStorageValue(`completed:${sessionId}`);

  return (
    <div className={`end-session ${completed ? "is-complete" : ""}`}>
      <div>
        <span>{completed ? "SESSION COMPLETE" : "END OF SESSION"}</span>
        <strong>{completed ? "첫 번째 학습을 마쳤습니다." : "오늘의 판단을 저장할까요?"}</strong>
        <p>작성한 메모와 힌트 상태는 이 브라우저에 남아 있습니다.</p>
      </div>
      <button type="button" onClick={() => setCompleted(completed ? "" : "true")}>
        {completed ? "완료 취소" : label}
      </button>
    </div>
  );
}

function useCompletion() {
  const [completed] = useStorageValue("completed:session-01");
  return completed === "true";
}

export function CourseProgress({
  compact = false,
  inline = false,
}: {
  compact?: boolean;
  inline?: boolean;
}) {
  const completed = useCompletion();
  const count = completed ? 1 : 0;
  const percent = Math.round((count / 8) * 100);

  if (inline) {
    return <span className="inline-progress"><i style={{ width: `${percent}%` }} />{count}/8</span>;
  }

  return (
    <div className={`course-progress ${compact ? "is-compact" : ""}`}>
      <div><span>나의 진도</span><strong>{count} / 8</strong></div>
      <div className="progress-track"><i style={{ width: `${percent}%` }} /></div>
      {!compact && <p>{completed ? "Session 2를 준비하고 있습니다." : "첫 세션부터 차근차근 시작하세요."}</p>}
    </div>
  );
}

export function SessionStatus() {
  const completed = useCompletion();
  return (
    <div className={`session-status ${completed ? "is-complete" : ""}`}>
      <span>{completed ? "완료" : "진행 중"}</span>
      <strong>{completed ? "Session 01 완료" : "메모는 자동 저장됩니다"}</strong>
      {completed && <Link href="/">과정 홈에서 진도 보기 →</Link>}
    </div>
  );
}
