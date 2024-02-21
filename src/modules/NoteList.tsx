import { Note } from './noteList/Note';

export function NoteList() {
  return (
    <div className="relative h-screen border-r border-zinc-800 pt-8 pl-8">
      <form className="pb-6 pr-8">
        <input className="text-xs px-2 py-1 w-full rounded-md border border-zinc-800 bg-zinc-900" placeholder="Search Notes" />
      </form>
      <ul>
        <li className="font-bold text-3xl px-8 py-4 -ml-8 border-y border-zinc-900 hover:bg-zinc-900 cursor-pointer">
          <div className="text-center">+</div>
        </li>
        { Array.from({ length: 8 }).map(n => (
          <Note>
            <Note.Heading>
              Heading
            </Note.Heading>
            <Note.Summary>
              Lorem ipsum dolor something something...
            </Note.Summary>
          </Note>
        ))}
      </ul>
    </div>
  );
}

