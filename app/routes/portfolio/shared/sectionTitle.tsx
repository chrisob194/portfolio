import { transformText } from '../../../utils';

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h1 className="font-sans text-lg font-bold">
      <span className="text-lime-400">/</span>{transformText(title, 'kebab')}
    </h1>
  );
}