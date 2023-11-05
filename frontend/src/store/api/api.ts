import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/config.ts';
import { TOKEN_NAMESPACE } from '@/store/slices/authSlice.ts';

export const AUTH_TAG = 'authTag';
export const STUDENT_TAG = 'studentTag';
export const TEACHER_TAG = 'teacherTag';
export const PARENT_TAG = 'parentTag';
export const SUBJECT_TAG = 'subjectTag';
export const SUBJECT_STUDENT_TAG = 'subjectStudentTag';
export const CLASS_TAG = 'classTag';
export const CLASS_STUDENT_TAG = 'classStudentTag';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem(TOKEN_NAMESPACE);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    AUTH_TAG,
    STUDENT_TAG,
    TEACHER_TAG,
    PARENT_TAG,
    SUBJECT_TAG,
    CLASS_TAG,
    SUBJECT_STUDENT_TAG,
    CLASS_STUDENT_TAG,
  ],
  endpoints: () => ({}),
});
