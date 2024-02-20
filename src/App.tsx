import { Previewer } from './modules/Previewer';

const markdown = `
# Heading

This is **bold** text. 

This is *italic* text.

This is <ins>underlined</ins> text.
`;

function App() {
  return (
    <>
      <Previewer input={markdown} />
    </>
  )
}

export default App
