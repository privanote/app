import parseHtmlComponent from 'html-react-parser';
import { marked } from 'marked';

interface ParsingStrategy {
  /** Receives a string of a particular markup and outputs an HTML string.
    * @param input - Markup string
    * @returns HTML string
    */
  parse: (input: string) => string;
}

class MarkdownStrategy implements ParsingStrategy {
  parse(input: string): React.Element {
    const output = marked(input);
    return parseHtmlComponent(output)   
  }
}

type SupportedMarkup = 'markdown';

class PreviewService {
  strategies: Record<SupportedMarkup, any>

  constructor() {
    // Creates a property which contains all the strategies.
    this.strategies = {
      markdown: MarkdownStrategy
    }
  }

  /**
    * Receives a string of a particular markup and outputs an HTML string. 
    * @param input - Markup string
    * @param type - Markup language
    * @return HTML string
    */
  parse(input: string, type: SupportedMarkup): React.Element {
    // Instantiate a strategy and parse the input.
    const strategy = new this.strategies[type];
    return strategy.parse(input);
  }
}

// Instantiate the preview service.
export const previewService = new PreviewService();
