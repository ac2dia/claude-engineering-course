type SessionStartGuideProps = {
  session: string;
  estimated: string;
  labTag?: string;
};

export function SessionStartGuide({ session, estimated, labTag }: SessionStartGuideProps) {
  return (
    <aside className="session-start-guide" aria-label={`Session ${session} 시작 전 안내`}>
      <p className="eyebrow">BEGINNER CHECKPOINT</p>
      <h3>처음이라면 여기부터 확인하세요</h3>
      <ol>
        <li><strong>브라우저</strong>에는 이 가이드를, <strong>터미널</strong>에는 실습 명령을 둡니다.</li>
        <li>
          {labTag ? (
            <>명령은 <code>globalpay-commerce-lab</code> 루트에서 실행하고, 첫 페이지의 안내에 따라 <code>{labTag}</code>에서 작업 브랜치를 만듭니다.</>
          ) : (
            <>이 세션은 개념·CLI·JetBrains 준비 과정입니다. 아직 실습 저장소의 코드를 수정하지 않습니다.</>
          )}
        </li>
        <li>예상 결과와 다르면 다음 단계로 넘어가지 말고 <code>pwd</code>, <code>git status --short --branch</code>, <code>java -version</code>부터 확인합니다.</li>
      </ol>
      <p>
        예상 시간은 {estimated}입니다. 한 번에 끝낼 필요가 없으며, 각 절 끝에서 멈춰도 브라우저 메모는 이 기기에 저장됩니다.
      </p>
    </aside>
  );
}
