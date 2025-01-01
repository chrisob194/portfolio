import Markdown from '../../components/markdown';
import SectionTitle from './shared/sectionTitle';

export default function About() {

  // mock
  const aboutMeText = 'Hello I am Christian and I am a graduated Computer Engineer, working as a web developer.\n I am a full stack developer with experiences on SaaS and On-Premises Software.\n  I am very passionated about my work, especially when it comes in finding ways to simplify and automate the development and deployment processes.';

  return (
    <>
      <SectionTitle title="About Me" />
      <div className="h-full flex items-center gap-2">
        <div className="flex-1 text-slate-600 font-mono">
          <Markdown>
            {aboutMeText}
          </Markdown>
        </div>
        <div className="flex-1">
          <Picture />
        </div>
      </div>
    </>
  );
}

function Picture() {
  return (
    <img src="https://t3.ftcdn.net/jpg/05/82/16/78/360_F_582167861_fI1K0aGgWVnL8ZkfZwAyDUNWi6OjtlJj.jpg" />
  );
}
