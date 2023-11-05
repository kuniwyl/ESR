import { api, CLASS_STUDENT_TAG, CLASS_TAG } from '@/store/api/api.ts';
import ClassDto from '@/model/ClassDto.ts';
import UserShortDto from '@/model/UserShortDto.ts';

const classSlice = api.injectEndpoints({
  endpoints: builder => ({
    getClasses: builder.query<Array<ClassDto>, void>({
      query: () => ({
        url: '/classes',
        method: 'GET',
      }),
      providesTags: [CLASS_TAG],
    }),
    getClass: builder.query<ClassDto, number>({
      query: id => ({
        url: `/classes/${id}`,
        method: 'GET',
      }),
      providesTags: [CLASS_TAG],
    }),
    postClass: builder.mutation<ClassDto, ClassDto>({
      query: classData => ({
        url: '/classes',
        method: 'POST',
        body: classData,
      }),
      invalidatesTags: [CLASS_TAG],
    }),
    putClass: builder.mutation<ClassDto, ClassDto>({
      query: classData => ({
        url: '/classes',
        method: 'PUT',
        body: classData,
      }),
      invalidatesTags: [CLASS_TAG],
    }),
    deleteClass: builder.mutation<boolean, number>({
      query: classId => ({
        url: `/classes/${classId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [CLASS_TAG],
    }),
    getClassStudents: builder.query<Array<UserShortDto>, number>({
      query: classId => ({
        url: `/classes/${classId}/students`,
        method: 'GET',
      }),
      providesTags: [CLASS_STUDENT_TAG],
    }),
    postClassStudent: builder.mutation<
      boolean,
      { id: number; student: number }
    >({
      query: ({ id, student }) => ({
        url: `/classes/${id}/students/${student}`,
        method: 'POST',
      }),
      invalidatesTags: [CLASS_STUDENT_TAG],
    }),
    deleteClassStudent: builder.mutation<
      boolean,
      { id: number; student: number }
    >({
      query: ({ id, student }) => ({
        url: `/classes/${id}/students/${student}`,
        method: 'DELETE',
      }),
      invalidatesTags: [CLASS_STUDENT_TAG],
    }),
  }),
});

export const {
  useGetClassesQuery,
  useGetClassQuery,
  usePostClassMutation,
  usePutClassMutation,
  useDeleteClassMutation,
  useGetClassStudentsQuery,
  usePostClassStudentMutation,
  useDeleteClassStudentMutation,
} = classSlice;
