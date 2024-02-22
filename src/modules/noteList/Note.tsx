type NoteProps = React.PropsWithChildren<{
  heading?: string;
  thumbnailUrl?: string;
}>

export function Note({ heading = "Untitled", thumbnailUrl, children }: NoteProps) {
  return (
    <li className="flex items-center gap-2 overflow-hidden max-h-32 px-8 py-4 -ml-8 border border-zinc-900 hover:bg-zinc-900 hover:border-zinc-400 transition-colors cursor-pointer">
      <div className="w-full">
        <h3 className="font-medium">{heading}</h3>
        <p className="text-xs text-zinc-300">
          {children}
        </p>
      </div>
      <div className="w-12 h-12 shrink-0">
        { thumbnailUrl ? <img className="aspect-square w-full h-full object-cover" src={thumbnailUrl} /> : null }
      </div>
    </li>
  );
}
