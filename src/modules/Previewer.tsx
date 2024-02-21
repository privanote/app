import { useMemo } from "react";
import { previewService } from "../services/preview";

type PreviewerProps = {
  input: string;
}

/**
  * The previewer which displays the formatted markup text.
  */
export function Previewer({ input }: PreviewerProps) {
  // Parse the input received.
  const content = useMemo(() => {
    return previewService.parse(input, "markdown")
  }, [input]); 

  return (
    <div>
      { content }
    </div>
  );
}
