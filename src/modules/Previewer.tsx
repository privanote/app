import { useMemo } from "react";
import { previewService } from "../services/preview";
import parseReactElementFromHtml from "html-react-parser"

type PreviewerProps = {
  input: string;
}

/**
  * The previewer which displays the formatted markup text.
  */
export function Previewer({ input }: PreviewerProps) {
  // Parse the input received into an html string using the preview service.
  // Then, convert the html string into JSX.
  const content = useMemo(() => {
    return parseReactElementFromHtml(previewService.parse(input, "markdown"))
  }, [input]); 

  return (
    <div>
      { content }
    </div>
  );
}
