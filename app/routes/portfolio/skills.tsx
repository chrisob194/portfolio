import SectionTitle from './shared/sectionTitle';

export default function Skills() {

  const languages = ['TypeScript', 'Java', 'Python'];
  const other = ['HTML', 'CSS', 'Sass'];
  const tools = ['Git', 'Docker', 'VSCode', 'IntelliJ', 'Docker', 'Jira', 'Trello', 'Obsidian'];
  const databases = ['Postgres', 'MongoDB', 'Redis', 'SQLite'];
  const frameworks = ['React Router', 'Angular', 'Next.js', 'FastAPI', 'Spring Boot', 'Vert.x'];

  return (
    <>
      <SectionTitle title="Skills" />
      <div className="h-full flex gap-4 items-start">
        <SkillBox header="Languages" skills={languages} />
        <SkillBox header="Other" skills={other} />
        <SkillBox header="Tools" skills={tools} />
        <SkillBox header="Databases" skills={databases} />
        <SkillBox header="Frameworks" skills={frameworks} />
      </div>
    </>
  )
}

interface SkillBoxProps {
  skills: string[];
  header: string;
}

function SkillBox({ skills, header }: SkillBoxProps) {
  return (
    <div className="flex-1 border-2">
      <div className="border-b-2 p-2">{header}</div>
      <div className="p-2 flex gap-1 flex-wrap">{skills.map(item => <div>{item}</div>)}</div>
    </div>
  );
}