import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Previewer } from '../Previewer';

describe("Previewer", () => {
  test("Renders markdown as HTML in the previewer", () => {
    const markdown = `
# Heading 1

This is some body text.

## Heading 2

This is **bold text**.
    `;

    const { container } = render(<Previewer input={markdown} />);
    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("h2");
    const strong = container.querySelector("strong");

    expect(h1.textContent).toEqual("Heading 1");
    expect(h2.textContent).toEqual("Heading 2");
    expect(strong.textContent).toEqual("bold text");
  });
});
