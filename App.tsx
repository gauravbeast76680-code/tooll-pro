import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { ToolType } from './types';
import Editor from './views/Editor';
import AiEnhancer from './views/AiEnhancer';
import PassportMaker from './views/PassportMaker';
import Converter from './views/Converter';
import Steganography from './views/Steganography';
import PdfTools from './views/PdfTools';
import PhotoScanner from './views/PhotoScanner';
import Dashboard from './views/Dashboard';

const App: React.FC = () => {
  const [currentTool, setCurrentTool] = useState<ToolType>(ToolType.DASHBOARD);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderTool = () => {
    switch (currentTool) {
      case ToolType.EDITOR: return <Editor />;
      case ToolType.AI_ENHANCER: return <AiEnhancer />;
      case ToolType.PASSPORT_MAKER: return <PassportMaker />;
      case ToolType.CONVERTER: return <Converter />;
      case ToolType.STEGANOGRAPHY: return <Steganography />;
      case ToolType.PDF_TOOLS: return <PdfTools />;
      case ToolType.PHOTO_SCANNER: return <PhotoScanner />;
      default: return <Dashboard onNavigate={setCurrentTool} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Sidebar 
        currentTool={currentTool} 
        onSelect={setCurrentTool} 
        isOpen={sidebarOpen}
        toggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="md:hidden h-16 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900 z-10">
           <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Tools Pro</span>
           <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-400">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
        </header>

        <div className="flex-1 overflow-y-auto relative custom-scrollbar bg-slate-950">
          {renderTool()}
        </div>
      </main>
    </div>
  );
};

export default App;