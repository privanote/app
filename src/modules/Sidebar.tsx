export function Sidebar({ children }) {
  return (
    <div className="relative h-screen border-r border-zinc-800 pt-8 pl-8">
      { children }
    </div>
  );
}

function Heading({ children }) {
  return (
    <h1 className="font-semibold uppercase text-xs text-zinc-500">
      { children }
    </h1>
  );
}

Sidebar.Heading = Heading;
