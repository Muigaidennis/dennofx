import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import { useUIStore } from './store/uiStore';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
  const theme = useUIStore((state) => state.theme);

  return (
    <BrowserRouter>
      <div className={`${theme} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'dark:bg-gray-800 dark:text-white',
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
