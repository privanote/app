export function Note({ children }) {
  return (
    <li className="px-8 py-4 -ml-8 border-y border-zinc-900 hover:bg-zinc-900 cursor-pointer">
      {children}
    </li>
  );
}

function Heading({ children }) {
  return (
    <h3 className="font-medium">{children}</h3>
  );
}

function Summary({ children }) {
  return (
    <p className="text-xs text-zinc-300">
      {children}
    </p>
  );
}

Note.Heading = Heading;
Note.Summary = Summary;

