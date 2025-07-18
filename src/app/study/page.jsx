import Link from "next/link";
// import studyMaterial from "@/data/studyMaterial";
import studyMaterial from "@/data/subjects";

export default function StudyHome() {
  return (
    <div>
      <h1>Select Class</h1>
      <ul>
        {Object.entries(studyMaterial).map(([cls, data]) => (
          <li key={cls}>
            <Link href={`/study/${cls}`}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
