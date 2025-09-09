import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function HtmlLesson4() {
  let averageScore = 90;
  let presentRate = 90;
  let isVolunteer = true;

  let message = "";
  if (averageScore >= 85 && presentRate >= 90 && isVolunteer) {
    message = "奨学金を支給します";
  } else {
    message = "奨学金を支給しません";
  }

  return (
    <ArchiveLayout>
      <article className="card">
        <h2 className="h2">奨学金判定プログラム</h2>
        <p>平均点: {averageScore}</p>
        <p>出席率: {presentRate}%</p>
        <p>ボランティア参加: {isVolunteer ? "あり" : "なし"}</p>
        <hr className="my-4" />
        <p>
          <strong>{message}</strong>
        </p>
      </article>
    </ArchiveLayout>
  );
}
