import { Spacer } from "./components/Spacer";
import { NoteList } from "./modules/NoteList";
import { Sidebar } from "./modules/Sidebar";
import { SidebarItem } from "./modules/sidebar/SidebarItem";
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { FileText as NotesIcon, Inbox as InboxIcon, Hash as TagIcon, Trash2 as TrashIcon } from "react-feather";

const mockTags = ["finance", "shopping", "ideas"];

function App() {
  return (
    <div className="flex">
      <PanelGroup autoSaveId="sidebar" direction="horizontal">
        <Panel defaultSize={20} minSize={10} collapsible>
          <Sidebar>
            <Sidebar.Heading>My Notebook</Sidebar.Heading>
            <ul className="-ml-8">
              <Spacer className="h-2" />
              <SidebarItem startDecorator={<NotesIcon size={16}/>}>
                Notes
              </SidebarItem>
              <SidebarItem startDecorator={<InboxIcon size={16}/>}>
                Inbox
              </SidebarItem>
              <SidebarItem startDecorator={<TrashIcon size={16}/>}>
                Trash
              </SidebarItem>
            </ul>
            <Spacer className="h-6" />
            <ul className="-ml-8">
              { mockTags.map(t => <SidebarItem startDecorator={<TagIcon size={16} />}>{t}</SidebarItem>)}
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
