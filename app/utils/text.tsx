type CaseType = 'camel' | 'kebab' | 'snake' | 'pascal';

export function transformText(text: string, outputCaseType: CaseType) {

  if (!text) {
    throw new Error('Cannot provide undefined text to function transformText!');
  }

  switch (outputCaseType) {
    case 'kebab':
      return text.toLowerCase().replaceAll(' ', '-');
    case 'camel':
      return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    default:
      console.warn(`Case ${outputCaseType} not supported yet.`);
      return text;
  }
}