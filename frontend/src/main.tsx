import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ModalProvider from 'components/Modal/ModalProvider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false, // By default data is refetched when window gets focus
      retry: 2, // Number of retries before failing the query
      staleTime: 1000 * 60 * 1, // 1 minutes
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <App />
        </ModalProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
