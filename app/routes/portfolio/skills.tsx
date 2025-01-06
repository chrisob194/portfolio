import SectionTitle from './shared/sectionTitle';
import { logos } from '../../assets/logos';

/* TODO how to model:
* flat table skills
* relevant columns:
* - group, which is the string that is used to group (e.g. 'languages', 'other', 'tools', 'databases')
* - key, which is the string that is used to identify the resource (saved in the FileStorage)
* - title, which is the label of the tooltip
*/

interface Skill {
  src: string;
  title: string;
}

export default function Skills() {

  // const languages2: Skill[] = [
  //   { src: logos.typescript, title: 'TypeScript' },
  //   { src: logos.java, title: 'Java' },
  //   { src: logos.python, title: 'Python' }
  // ]
  const languages = ['TypeScript', 'Java', 'Python'];
  const other = ['HTML', 'CSS', 'Sass'];
  const tools = ['Git', 'Docker', 'VSCode', 'IntelliJ', 'Docker', 'Jira', 'Trello', 'Obsidian'];
  const databases = ['Postgres', 'MongoDB', 'Redis', 'SQLite'];
  const frameworks = ['React Router', 'Angular', 'Next.js', 'FastAPI', 'Spring Boot', 'Vert.x'];

  return (
    <>
      <SectionTitle title="Skills" />
      <div className="h-full flex gap-4 items-start">
        {/* <SkillBox2 header="Languages" skills={languages2} /> */}
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

interface SkillBoxProps2 {
  skills: Skill[];
  header: string;
}

function SkillBox2({ skills, header }: SkillBoxProps2) {
  return (
    <div className="flex-1 border-2">
      <div className="border-b-2 p-2">{header}</div>
      <div className="p-2 flex gap-1 flex-wrap">{skills.map(item => <img className="size-8" src={item.src} title={item.title} alt={item.title} />)}</div>
    </div>
  );
}