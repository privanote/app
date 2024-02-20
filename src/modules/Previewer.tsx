import { useMemo } from 'react';
import parse from 'html-react-parser';
import { marked } from 'marked';

type PreviewerProps = {
  input: string;
}

export function Previewer({ input }: PreviewerProps) {
  const content = useMemo(() => parse(marked(input)), [input]); 

  return (
    <div>
      { content }
    </div>
  );
}
