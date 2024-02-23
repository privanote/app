type SpacerProps = {
  /** Only accepts Tailwind height classes.*/
  className: `h-${number}`;
};

export function Spacer(props: SpacerProps) {
  return <div {...props}></div>
}

