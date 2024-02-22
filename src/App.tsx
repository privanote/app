import { NoteList } from "./modules/NoteList";
import { Sidebar } from "./modules/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { FileText as NotesIcon, Inbox as InboxIcon, Hash as TagIcon, Trash2 as TrashIcon } from "react-feather";

function App() {
  return (
    <div className="flex">
      <PanelGroup autoSaveId="sidebar" direction="horizontal">
        <Panel defaultSize={20} minSize={10} collapsible>
          <Sidebar>
            <Sidebar.Heading>My Notebook</Sidebar.Heading>
            <ul className="-ml-8">
              <li className="mt-2 text-zinc-200">
                <button className="flex gap-2 items-center text-left text-xs py-2 px-8 w-full border border-transparent hover:border-zinc-800 transition-colors hover:bg-zinc-900">
                  <NotesIcon size={16} />
                  <span>All Notes</span>
                </button>
                <button className="flex gap-2 items-center text-left text-xs py-2 px-8 w-full border border-transparent hover:border-zinc-800 transition-colors hover:bg-zinc-900">
                  <InboxIcon size={16} />
                  <span>Inbox</span>
                </button>
                <button className="flex gap-2 items-center text-left text-xs py-2 px-8 w-full border border-transparent hover:border-zinc-800 transition-colors hover:bg-zinc-900">
                  <TrashIcon size={16} />
                  <span>Trash</span>
                </button>
              </li>
            </ul>
            <div className="h-32"></div>
            <ul className="-ml-8">
              <li>
                <button className="flex gap-2 items-center text-left text-xs py-2 px-8 w-full border border-transparent hover:border-zinc-800 transform-colors hover:bg-zinc-900">
                  <TagIcon size={16} />
                  <span>finance</span>
                </button>
              </li>
            </ul>
          </Sidebar>
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={20} minSize={10} collapsible>
          <NoteList />
        </Panel>
        <PanelResizeHandle />
        <Panel>
          {/* Editor */} 
        </Panel>
      </PanelGroup>
    </div>
  )
}

export default App
