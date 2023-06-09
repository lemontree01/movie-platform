import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
