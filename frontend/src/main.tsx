import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import router from '@/configuration/router.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/forms/styles/index.scss';

import '@/main.scss';

import { AuthProvider } from '@/context/auth';
import { SemesterProvider } from '@/context/semesterChoose.tsx';
import { InfoProvider } from '@/features/info/InfoContext.tsx';
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <InfoProvider>
          <SemesterProvider>
            <RouterProvider router={router} />
          </SemesterProvider>
        </InfoProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
