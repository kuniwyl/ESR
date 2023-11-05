import { api, SUBJECT_STUDENT_TAG, SUBJECT_TAG } from '@/store/api/api.ts';
import SubjectDto from '@/model/SubjectDto.ts';
import UserShortDto from '@/model/UserShortDto.ts';

const subjectSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSubjects: builder.query<Array<SubjectDto>, void>({
      query: () => ({
        url: '/subjects',
        method: 'GET',
      }),
      providesTags: [SUBJECT_TAG],
    }),
    getSubject: builder.query<SubjectDto, number>({
      query: id => ({
        url: `/subjects/${id}`,
        method: 'GET',
      }),
      providesTags: [SUBJECT_TAG],
    }),
    postSubject: builder.mutation<SubjectDto, SubjectDto>({
      query: subject => ({
        url: '/subjects',
        method: 'POST',
        body: subject,
      }),
      invalidatesTags: [SUBJECT_TAG],
    }),
    putSubject: builder.mutation<
      SubjectDto,
      { id: number; subject: SubjectDto }
    >({
      query: ({ id, subject }) => ({
        url: `/subjects/${id}`,
        method: 'PUT',
        body: subject,
      }),
      invalidatesTags: [SUBJECT_TAG],
    }),
    deleteSubject: builder.mutation<boolean, number>({
      query: subjectId => ({
        url: `/subjects/${subjectId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [SUBJECT_TAG],
    }),
    getSubjectStudents: builder.query<Array<UserShortDto>, number>({
      query: subjectId => ({
        url: `/subjects/${subjectId}/students`,
        method: 'GET',
      }),
      providesTags: [SUBJECT_STUDENT_TAG],
    }),
    postSubjectStudent: builder.mutation<
      boolean,
      { id: number; student: number }
    >({
      query: ({ id, student }) => ({
        url: `/subjects/${id}/students/${student}`,
        method: 'POST',
      }),
      invalidatesTags: [SUBJECT_STUDENT_TAG],
    }),
    deleteSubjectStudent: builder.mutation<
      boolean,
      { id: number; student: number }
    >({
      query: ({ id, student }) => ({
        url: `/subjects/${id}/students/${student}`,
        method: 'DELETE',
      }),
      invalidatesTags: [SUBJECT_STUDENT_TAG],
    }),
  }),
});

export const {
  useGetSubjectsQuery,
  useGetSubjectQuery,
  usePostSubjectMutation,
  usePutSubjectMutation,
  useDeleteSubjectMutation,
  useGetSubjectStudentsQuery,
  usePostSubjectStudentMutation,
  useDeleteSubjectStudentMutation,
} = subjectSlice;
