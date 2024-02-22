import { Note } from "./noteList/Note";
import { FilePlus as CreateNoteIcon } from "react-feather";

type SpacerProps = {
  /** Only accepts Tailwind height classes.*/
  className: `h-${number}`;
};

function Spacer(props: SpacerProps) {
  return <div {...props}></div>
}

export function NoteList() {
  return (
    <div className="relative h-screen border-r border-zinc-800">
      <div className="pt-8 px-8">
        <form>
          <input className="text-xs px-2 py-1 w-full rounded-md border border-zinc-800 bg-zinc-900" placeholder="Search Notes" />
        </form>
        <Spacer className="h-3" />
        <ul className="flex justify-end">
          <li>
            <button className="flex gap-1 items-center px-2 py-1 border border-zinc-800 rounded-md text-xs text-zinc-300 hover:border-zinc-400 transition-colors">
              <span>Create</span>
              <CreateNoteIcon size={18} />
            </button>
          </li>
        </ul>
        <Spacer className="h-3" />
      </div>
      <ul className="pl-8">
        <Note heading="Heading" thumbnailUrl="https://fastly.picsum.photos/id/884/200/200.jpg?hmac=BEameeYahafzsG-UCcyxl-la3nd2GolgYlQgWpd5krk">
          Lorem ipsum dolor something something...
        </Note>
        { Array.from({ length: 8 }).map(() => (
          <Note heading="Heading">
            Lorem ipsum dolor something something...
          </Note>
        ))}
      </ul>
    </div>
  );
}
