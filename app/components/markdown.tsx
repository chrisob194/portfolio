import type { ReactNode } from 'react';

interface Rule {
  pattern: RegExp;
  replacement: string;
}

const rules: Rule[] = [];

function parseMarkdown(markdownText: string): ReactNode[] {

  const text: string[] = markdownText.split('\n').map(line => line.trim());

  return text.map((line, index) => <p key={index} className="mb-2">{line}</p>)

  return [];
  // return rules.reduce((htmlText, rule) => htmlText.replace(rule.pattern, rule.replacement), markdownText);
}

interface Props {
  children: string;
}

export default function Markdown({ children }: Props) {
  return (
    <>
      {parseMarkdown(children)}
    </>
  );
}