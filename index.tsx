import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AlertTriangle } from 'lucide-react';

// Error Boundary to catch crashes and show a readable error
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-red-500 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-slate-400 mb-6 text-sm">The application encountered an unexpected error.</p>
            <div className="bg-black/50 p-4 rounded-lg text-left overflow-auto max-h-48 mb-6 border border-slate-800">
               <code className="text-red-400 text-xs font-mono whitespace-pre-wrap">
                 {this.state.error?.toString()}
               </code>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-colors w-full"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);