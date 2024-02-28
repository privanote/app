type SidebarItemProps = React.PropsWithChildren<{
  startDecorator: React.ReactNode;
}>

export function SidebarItem({ startDecorator, children }: SidebarItemProps) {
  return (
    <li>
      <button className="flex gap-2 items-center text-left text-zinc-200 text-xs py-2 px-8 w-full border border-transparent hover:border-zinc-800 transform-colors hover:bg-zinc-900">
        {startDecorator}
        <span>
          {children}
        </span>
      </button>
    </li>
  );
}

