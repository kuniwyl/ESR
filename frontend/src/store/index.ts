import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice.ts';
import { api } from '@/store/api/api.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import schoolSlice from '@/store/slices/schoolSlice.ts';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    api: api.reducer,
    school: schoolSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
