import { NoteList } from "./modules/NoteList";
import { Sidebar } from "./modules/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

function App() {
  return (
    <div className="flex">
      <PanelGroup autoSaveId="sidebar" direction="horizontal">
        <Panel defaultSize={20} minSize={10} collapsible>
          <Sidebar>
            <Sidebar.Heading>My Notebook</Sidebar.Heading>
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
